import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestModule } from './test/test.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'db4free.net',
      port: 3306,
      username: 'thisisacme',
      password: 'Mkq7LEF2cVqL',
      database: 'thisisacme',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TestModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
