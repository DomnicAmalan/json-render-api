import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signUp(email: string, password: string): Promise<any> {
    const user = await this.usersService.createUser(email, password);
    return { message: 'User registered successfully', userId: user.id };
  }

  async signIn(email: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(email);
    if (user && await bcrypt.compare(password, user.password)) {
      const payload = { email: user.email, sub: user.id };
      const token = this.jwtService.sign(payload);
      await this.usersService.saveToken(user.id, token);
      return { access_token: token };
    }
    return null;
  }

  async signOut(userId: number): Promise<void> {
    await this.usersService.removeToken(userId);
  }
}