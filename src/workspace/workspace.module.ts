import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Workspace } from "./workspace.entity";
import { WorkspacesService } from "./workspace.service";
import { WorkspacesController } from "./workspace.controller";
import { Form } from "../forms/forms.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Workspace, Form])],
  controllers: [WorkspacesController],
  providers: [WorkspacesService],
})
export class WorkspacesModule {}