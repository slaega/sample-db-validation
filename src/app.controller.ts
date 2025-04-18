import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  createUser(@Body() body: Record<string, any>): Promise<string> {
    return this.appService.createUser(body);
  }
}
