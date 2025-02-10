import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { FormsService } from './forms.service';
import { Form } from './forms.entity';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { CreateFormDto, UpdateFormDto } from './forms.dto';

@Controller('forms')
export class FormsController {
  constructor(private readonly formsService: FormsService) { }

  @UseGuards(JwtAuthGuard)
  @Get(':workspaceId')
  async getFormsByWorkspace(@Param('workspaceId') workspaceId: string): Promise<Form[]> {
    return this.formsService.findByWorkspaceId(workspaceId);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':workspaceId/form/:formId')
  async getFormsByWorkspaceAndFormId(
    @Param('workspaceId') workspaceId: string,
    @Param('formId') formId: string,
  ): Promise<Form | null> {
    return this.formsService.findByWorkspaceAndFormId(workspaceId, formId);
  }

  @UseGuards(JwtAuthGuard)
  @Post('create')
  async create(@Body() createFormDto: CreateFormDto): Promise<Form> {
    return this.formsService.create(createFormDto);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':workspaceId/form/:formId')
  async updateFormDataById(
    @Param('workspaceId') workspaceId: string,
    @Param('formId') formId: string,
    @Body() updateFormDto: UpdateFormDto,
  ): Promise<Form> {
    return this.formsService.updateForm(workspaceId, formId, updateFormDto);
  }

  // Delete a form by its ID
  @UseGuards(JwtAuthGuard)
  @Delete(':workspaceId/form/:formId')
  async deleteFormById(
    @Param('workspaceId') workspaceId: string,
    @Param('formId') formId: string,
  ): Promise<void> {
    return this.formsService.deleteForm(workspaceId, formId);
  }
}
