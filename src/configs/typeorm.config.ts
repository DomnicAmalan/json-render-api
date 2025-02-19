

import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { Workspace } from 'src/workspace/workspace.entity';
import { User } from 'src/users/user.entity';
import { Form } from 'src/forms/forms.entity';
import * as path from 'path';

export const typeOrmConfig = (configService: ConfigService): TypeOrmModuleOptions => {
  return {
    type: 'sqlite',
    database: path.join(__dirname, 'database.sqlite'), // Path to your SQLite database file
    autoLoadEntities: true,
    synchronize: true,
    entities: [Workspace, User, Form],
  };
};
