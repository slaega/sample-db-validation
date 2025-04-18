import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { typeorm } from './datasource/datasource';

async function bootstrap() {
  await typeorm.initialize();
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
