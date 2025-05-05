import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbValidationModule, TypeORMAdapter } from '@slaega/db-validation';
import { typeorm } from './datasource/datasource';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './datasource/entity';
import { DataSource } from 'typeorm';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...typeorm.options,
    }),
    TypeOrmModule.forFeature([User]),
    DbValidationModule.registerAsync({
      imports: [TypeOrmModule],
      useFactory: (ds: DataSource) => new TypeORMAdapter(ds),
      inject: [DataSource],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
