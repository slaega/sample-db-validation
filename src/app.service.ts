import { Injectable } from '@nestjs/common';
import {
  DbValidationService,
  UseDbValidationSimple,
} from '@slaega/db-validation';
import { AppValidationRule } from './app-validation.rule';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './datasource/entity';
@Injectable()
export class AppService {
  constructor(
    private dbValidatorService: DbValidationService,
    @InjectRepository(User) readonly userRepository: Repository<User>,
  ) {}
  @UseDbValidationSimple(AppValidationRule, 'updateUser')
  async createUser(body: Record<string, any>): Promise<string> {
    console.log(body);
    const user = new User();
    user.email = body.email;
    user.name = body.name;

    await this.userRepository.save(user);
    return 'Hello World!';
  }
}
