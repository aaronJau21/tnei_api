import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { SharedModule } from './shared/shared.module';
import { ConfigModule } from '@nestjs/config';
import { ClientModule } from './client/client.module';
import { OthersModule } from './others/others.module';

@Module({
  imports: [PrismaModule, UserModule, SharedModule, ConfigModule.forRoot(), ClientModule, OthersModule],
})
export class AppModule {}
