// import { Controller, Get, Query, Post, Body } from '@nestjs/common';
// import { LlmService } from './llm.service';

// @Controller('llm')
// export class LlmController {
//   constructor(private readonly llmService: LlmService) {}

//   @Post('generate')
//   async generate(@Body('prompt') prompt: string, @Body('service') service: 'openai' | 'ollama') {
//     return this.llmService.generateResponse(prompt, service);
//   }

//   @Get('generate')
//   async generateQuery(@Query('prompt') prompt: string, @Query('service') service: 'openai' | 'ollama') {
//     return this.llmService.generateResponse(prompt, service);
//   }
// }
