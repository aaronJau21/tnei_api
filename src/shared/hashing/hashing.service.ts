import { Injectable } from '@nestjs/common';

import * as bcrypt from 'bcrypt';

@Injectable()
export class HashingService {
  async passwordHash(password: string) {
    return await bcrypt.hash(password, 10);
  }

  async passwordCompare(password: string, pass_user: string) {
    return await bcrypt.compare(password, pass_user);
  }
}
