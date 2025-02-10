// src/workspaces/workspaces.controller.ts
import { Controller, Post, Body, Get, UseGuards } from "@nestjs/common";
import { WorkspacesService } from "./workspace.service";
import { AuthGuard } from "@nestjs/passport";
import { JwtAuthGuard } from "src/auth/guards/jwt.guard";


@Controller("workspaces")
export class WorkspacesController {
  constructor(private readonly workspacesService: WorkspacesService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Body() workspaceData: { name: string }) {
    return this.workspacesService.create(workspaceData);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async findAll() {
    return this.workspacesService.findAll();
  }
}