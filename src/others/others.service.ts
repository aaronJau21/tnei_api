import { Injectable } from '@nestjs/common';
import { Products } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OthersService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAllProducts() {
    const products = await this.prismaService.products.findMany();

    return { products };
  }

  async getPackByIdProduct(id: number) {
    console.log(id);
    const pack = await this.prismaService.packs.findMany({
      where: {
        product_id: id,
      },
    });

    return { pack };
  }

  async getClAccounts() {
    const cl_accounts = await this.prismaService.cl_accounts.findMany();

    return { cl_accounts };
  }
}
