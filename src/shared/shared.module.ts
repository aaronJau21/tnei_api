import { Module } from '@nestjs/common';
import { HashingService } from './hashing/hashing.service';
import { JsonWebTokenService } from './json-web-token/json-web-token.service';
import { JwtModule } from '@nestjs/jwt';
import { enviroments } from 'src/constants/contats';

@Module({
  providers: [HashingService, JsonWebTokenService],
  exports: [HashingService, JwtModule, JsonWebTokenService],
  imports: [
    JwtModule.register({
      global: true,
      secret: enviroments.SECRET_KEY,
      signOptions: { expiresIn: '4h' },
    }),
  ],
})
export class SharedModule {}
