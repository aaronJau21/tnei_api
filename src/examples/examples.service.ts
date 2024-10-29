import { Injectable } from '@nestjs/common';
import { CreateExampleDto } from './dto/create-example.dto';
import { UpdateExampleDto } from './dto/update-example.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ExamplesService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: CreateExampleDto) {
    const examples = await this.prismaService.examples.create({
      data,
    });

    return { examples };
  }

  async findAll() {
    const examples = await this.prismaService.examples.findMany();

    return { examples };
  }

  findOne(id: number) {
    return `This action returns a #${id} example`;
  }

  update(id: number, updateExampleDto: UpdateExampleDto) {
    return `This action updates a #${id} example`;
  }

  remove(id: number) {
    return `This action removes a #${id} example`;
  }
}
