import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async createUser(@Body() body: Record<string, any>): Promise<string> {
    console.log('-----------');
    return await this.appService.createUser(body);
  }
}
