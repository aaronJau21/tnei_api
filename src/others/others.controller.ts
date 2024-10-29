import { Controller, Get, Param } from '@nestjs/common';
import { OthersService } from './others.service';

@Controller('others')
export class OthersController {
  constructor(private readonly othersService: OthersService) {}

  @Get('/products')
  getAllProducts() {
    return this.othersService.getAllProducts();
  }

  @Get('/packs/:id')
  getPackByIdProduct(@Param('id') id: string) {
    return this.othersService.getPackByIdProduct(+id);
  }

  @Get('/cl_account')
  getClAccounts() {
    return this.othersService.getClAccounts();
  }
}
