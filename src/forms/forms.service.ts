import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFormDto, UpdateFormDto } from './forms.dto';
import { Form } from './forms.entity';

@Injectable()
export class FormsService {
  constructor(
    @InjectRepository(Form)
    private readonly formRepository: Repository<Form>,
  ) {}

  async create(createFormDto: CreateFormDto): Promise<Form> {
    const newForm = this.formRepository.create({
      workspaceId: createFormDto.workspaceId,
      formJson: createFormDto.formJson || {},
      name: createFormDto.name,
    });

    return await this.formRepository.save(newForm);
  }

  async findByWorkspaceId(workspaceId: string): Promise<Form[]> {
    return this.formRepository.find({ where: { workspaceId } });
  }

  async findByWorkspaceAndFormId(workspaceId: string, formId: string): Promise<Form | null> {
    return this.formRepository.findOne({ where: { workspaceId, id: formId } });
  }

  async updateForm(workspaceId: string, formId: string, updateFormDto: UpdateFormDto): Promise<Form> {
    const form = await this.formRepository.findOne({ where: { workspaceId, id: formId } });

    if (!form) {
      throw new NotFoundException(`Form with id ${formId} not found`);
    }

    Object.assign(form, updateFormDto); 
    return this.formRepository.save(form);
  }

  async deleteForm(workspaceId: string, formId: string): Promise<void> {
    const form = await this.formRepository.findOne({ where: { workspaceId, id: formId } });

    if (!form) {
      throw new NotFoundException(`Form with id ${formId} not found`);
    }

    await this.formRepository.remove(form);
  }
}
