import { DataSource } from 'typeorm';
import { Lois, Product, User } from './entity';

export const typeorm = new DataSource({
  type: 'sqlite',
  database: './prisma/test.db',
  entities: [User, Lois, Product],
  synchronize: false,
  logging: true,
});
