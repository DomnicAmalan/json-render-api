import { Controller, Post, Body, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/localauth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  async signUp(@Body() body: { email: string, password: string }) {
    return this.authService.signUp(body.email, body.password);
  }

  @Post('signin')
  async signIn(@Request() req) {
    return this.authService.signIn(req.body.email, req.body.password);
  }

  @UseGuards(LocalAuthGuard)
  @Post('signout')
  async signOut(@Body() body: { userId: number }) {
    return this.authService.signOut(body.userId);
  }
}