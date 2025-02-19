import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { Workspace } from 'src/workspace/workspace.entity';
import { User } from 'src/users/user.entity';
import { Form } from 'src/forms/forms.entity';
import * as fs from 'fs';
import * as path from 'path';

export const typeOrmConfig = (configService: ConfigService): TypeOrmModuleOptions => {
  const caCertPath = path.join(__dirname, 'ca.pem'); // Ensure this file exists in the same directory
  const sslOptions = {
    rejectUnauthorized: true,
    ca: fs.readFileSync(caCertPath, 'utf8'), // Read CA file
  };

  return {
    type: 'postgres',
    host: configService.get<string>('DB_HOST'),
    port: configService.get<number>('DB_PORT'),
    username: configService.get<string>('DB_USERNAME'),
    password: configService.get<string>('DB_PASSWORD'),
    database: configService.get<string>('DB_NAME'),
    autoLoadEntities: true,
    synchronize: true,
    entities: [Workspace, User, Form],
    ssl: sslOptions,
  };
};
