import { Module } from '@nestjs/common';
import { OthersService } from './others.service';
import { OthersController } from './others.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [OthersController],
  providers: [OthersService],
  imports: [PrismaModule],
})
export class OthersModule {}
