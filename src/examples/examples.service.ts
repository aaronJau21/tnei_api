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

  async findOne(id: number) {
    const example = await this.prismaService.examples.findFirst({
      where: {
        id,
      },
    });

    return example;
  }

  async update(id: number, data: UpdateExampleDto) {
    const updateExample = await this.prismaService.examples.update({
      where: { id },
      data,
    });

    return updateExample;
  }

  remove(id: number) {
    return `This action removes a #${id} example`;
  }
}
