import { IsString, IsNotEmpty, IsObject } from 'class-validator';

export class CreateFormDto {
  @IsString()
  @IsNotEmpty()
  workspaceId: string;

  @IsObject()
  formJson: object;

  @IsString()
  @IsNotEmpty()
  name: string;
}

export class UpdateFormDto {
  @IsObject()
  formJson: object;
}