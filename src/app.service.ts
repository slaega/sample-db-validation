import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  DbValidationService,
  UseDbValidationSimple,
  ValidationOptions,
} from '@slaega/db-validation';
import { Repository } from 'typeorm';
import { AppValidationRule } from './app-validation.rule';
import { User } from './datasource/entity';
@Injectable()
export class AppService {
  constructor(
    private dbValidatorService: DbValidationService,
    @InjectRepository(User) readonly userRepository: Repository<User>,
  ) {}
  @UseDbValidationSimple(AppValidationRule, 'updateUser')
  async createUser(
    body: Record<string, any>,
    options?: ValidationOptions,
  ): Promise<string> {
    console.log('options', options);
    const user = new User();
    user.email = body.email;
    user.name = body.name;

    await this.userRepository.save(user);
    return 'Hello World!';
  }
}
