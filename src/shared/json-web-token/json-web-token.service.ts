import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JsonWebTokenService {
  constructor(private readonly jwtService: JwtService) {}

  async createJwt(id: number, name: string) {
    const payload = { sub: id, name };

    return await this.jwtService.signAsync(payload)
  }
}
