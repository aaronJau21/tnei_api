import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto } from './dtos/login.dto';
import { HashingService } from 'src/shared/hashing/hashing.service';
import { JsonWebTokenService } from 'src/shared/json-web-token/json-web-token.service';

@Injectable()
export class UserService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly hashingService: HashingService,
    private readonly jsonWebTokenService: JsonWebTokenService,
  ) {}

  async login(data: LoginDto): Promise<{ token: string }> {
    const { name, password } = data;
    const user = await this.prismaService.users.findFirst({
      where: {
        name,
      },
    });

    if (!user) throw new NotFoundException('Credenciales incorrectas');

    const compare = await this.hashingService.passwordCompare(
      password,
      user.password,
    );

    if (!compare) throw new NotFoundException('Credenciales incorrectas');

    const token = await this.jsonWebTokenService.createJwt(user.id, user.name);

    return { token };
  }
}
