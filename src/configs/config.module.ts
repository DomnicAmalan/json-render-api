import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';

@Module({
  imports: [
    NestConfigModule.forRoot({
      isGlobal: true, // Makes the module globally available
      envFilePath: '.env', // Path to your .env file
    }),
  ],
})
export class ConfigModule {}