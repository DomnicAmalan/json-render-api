// src/workspaces/workspaces.service.ts
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Workspace } from "./workspace.entity";

@Injectable()
export class WorkspacesService {
  constructor(
    @InjectRepository(Workspace)
    private readonly workspaceRepository: Repository<Workspace>
  ) {}

  async create(workspaceData: Partial<Workspace>): Promise<Workspace> {
    const workspace = this.workspaceRepository.create(workspaceData);
    return this.workspaceRepository.save(workspace);
  }

  async findAll(): Promise<Workspace[]> {
    return this.workspaceRepository.find();
  }
}