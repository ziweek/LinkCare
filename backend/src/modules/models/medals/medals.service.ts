import { Injectable } from '@nestjs/common';
import { CreateMedalDto } from './dto/create-medal.dto';
import { UpdateMedalDto } from './dto/update-medal.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Medal } from './entities/medal.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MedalsService {
  constructor(
    @InjectRepository(Medal) private medalsRepository: Repository<Medal>,
  ) {}

  async create(createMedalDto: CreateMedalDto) {
    return await this.medalsRepository.save(createMedalDto);
  }

  async findAll() {
    return await this.medalsRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} medal`;
  }

  update(id: number, updateMedalDto: UpdateMedalDto) {
    return `This action updates a #${id} medal`;
  }

  remove(id: number) {
    return `This action removes a #${id} medal`;
  }
}
