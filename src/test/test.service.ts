import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Test } from '@nestjs/testing';
import { Repository } from 'typeorm';

@Injectable()
export class TestService {
  constructor(
    @InjectRepository(Test)
    private testRepository: Repository<Test>,
  ) {}

  async create(test: any) {
    this.testRepository.create(test);
    return this.testRepository.save(test);
  }

  async update(id: string, test: any) {
    return await this.testRepository.update(id, test);
  }
}
