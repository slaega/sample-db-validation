import { ValidationBuilderFactory } from '@slaega/db-validation';
import { User } from './datasource/entity';

export class AppValidationRule {
  createUser({ email }: Record<string, any>) {
    console.log('start');
    return ValidationBuilderFactory.forPrisma().unique('user', {
      email,
    });
  }

  updateUser({ email }: Record<string, any>) {
    return ValidationBuilderFactory.forTypeORM().unique(User, { email });
  }
}
