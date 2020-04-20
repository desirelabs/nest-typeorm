import { Controller, Post, Body, Put, Param } from '@nestjs/common';
import { TestService } from './test.service';

@Controller('tests')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Post()
  async create(@Body() test: any) {
    return await this.testService.create(test);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() test: any) {
    return await this.testService.update(id, test);
  }
}
