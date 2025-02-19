  // import { Injectable } from '@nestjs/common';
  // import axios from 'axios';
  // import { ConfigService } from '@nestjs/config';

  // @Injectable()
  // export class LlmService {
  //   private openaiApiKey: string;
  //   private openaiApiUrl: string;
  //   private ollamaApiUrl: string;
  //   private ollamaApiKey: string;
  //   private ollamaModelName: string;

  //   constructor(private configService: ConfigService) {
  //     this.openaiApiKey = this.configService.get<string>('OPENAI_API_KEY');
  //     this.openaiApiUrl = this.configService.get<string>('OPENAI_API_URL');
  //     this.ollamaApiUrl = this.configService.get<string>('OLLAMA_API_URL');
  //     this.ollamaApiKey = this.configService.get<string>('OLLAMA_API_KEY');
  //     this.ollamaModelName = this.configService.get<string>('OLLAMA_MODEL_NAME');

  //     if (!this.openaiApiKey) {
  //       throw new Error('OPENAI_API_KEY is not defined in environment variables.');
  //     }
  //     if (!this.openaiApiUrl) {
  //       throw new Error('OPENAI_API_URL is not defined in environment variables.');
  //     }
  //     if (!this.ollamaApiUrl) {
  //       throw new Error('OLLAMA_API_URL is not defined in environment variables.');
  //     }
  //     if (!this.ollamaApiKey) {
  //       throw new Error('OLLAMA_API_KEY is not defined in environment variables.');
  //     }
  //     if (!this.ollamaModelName) {
  //       throw new Error('OLLAMA_MODEL_NAME is not defined in environment variables.');
  //     }
  //   }

    
  //   async generateWithOpenAI(prompt: string): Promise<any> {
  //     try {
  //       const response = await axios.post(
  //         this.openaiApiUrl,
  //         {
  //           model: 'text-davinci-003',
  //           prompt,
  //           max_tokens: 100,
  //         },
  //         {
  //           headers: {
  //             'Authorization': `Bearer ${this.openaiApiKey}`,
  //             'Content-Type': 'application/json',
  //           },
  //         }
  //       );
  //       return response.data;
  //     } catch (error) {
  //       console.error('Error with OpenAI:', error);
  //       throw error;
  //     }
  //   }

  //   async generateWithOllama(prompt: string): Promise<any> {
  //     try {
  //       const response = await axios.post(
  //         this.ollamaApiUrl,
  //         {
  //           model: this.ollamaModelName,
  //           prompt,
  //         },
  //         {
  //           headers: {
  //             'Authorization': `Bearer ${this.ollamaApiKey}`,
  //             'Content-Type': 'application/json',
  //           },
  //         }
  //       );
  //       return response.data;
  //     } catch (error) {
  //       console.error('Error with Ollama:', error);
  //       throw error;
  //     }
  //   }

    
  //   async generateResponse(prompt: string, service: 'openai' | 'ollama'): Promise<any> {
  //     if (service === 'openai') {
  //       return await this.generateWithOpenAI(prompt);
  //     } else if (service === 'ollama') {
  //       return await this.generateWithOllama(prompt);
  //     }
  //     throw new Error('Invalid service specified.');
  //   }
  // }
