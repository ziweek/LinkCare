import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { MedalsService } from './medals.service';
import { MedalsController } from './medals.controller';
import { Medal } from './entities/medal.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Medal])],
  controllers: [MedalsController],
  providers: [MedalsService],
})
export class MedalsModule {}
