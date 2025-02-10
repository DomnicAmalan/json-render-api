import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { typeOrmConfig } from './configs/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from './configs/config.module';
import { ConfigService } from '@nestjs/config';
import { WorkspacesModule } from './workspace/workspace.module';
import { FormsModule } from './forms/forms.module';
import { LlmModule } from './llm/llm.module';

@Module({
  imports: [ConfigModule, TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: typeOrmConfig,
  }), AuthModule, WorkspacesModule, UsersModule, FormsModule, LlmModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
