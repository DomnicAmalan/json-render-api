import { Injectable } from '@nestjs/common';
import { Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt } from 'passport-jwt';
import { UsersService } from '../../users/users.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Extract token from Authorization header
      ignoreExpiration: false, // Token expiration check
      secretOrKey: process.env.JWT_SECRET, // Secret key for verifying the JWT
    });
  }

  async validate(payload: any) {
    const user = await this.usersService.findOneById(payload.sub); // Fetch user by ID
    if (user) {
      return user;
    }

    return null;
  }
}
