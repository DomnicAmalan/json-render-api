import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/user.entity';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';

describe('AuthService', () => {
  let authService: AuthService;
  let usersService: Partial<UsersService>;
  let jwtService: Partial<JwtService>;

  beforeEach(async () => {
    usersService = {
      findOne: jest.fn().mockResolvedValue({ id: 1, email: 'test@example.com', password: 'hashedPassword' } as User),
      saveToken: jest.fn(),
    };

    jwtService = {
      sign: jest.fn().mockReturnValue('mockToken'),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: UsersService, useValue: usersService },
        { provide: JwtService, useValue: jwtService },
      ],
    }).compile();

    authService = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(authService).toBeDefined();
  });

  describe('signIn', () => {
    it('should return a token if credentials are valid', async () => {
      jest.spyOn(bcrypt, 'compare').mockResolvedValue(true as never);

      const result = await authService.signIn('test@example.com', 'password');
      expect(result).toEqual({ access_token: 'mockToken' });
      expect(usersService.saveToken).toHaveBeenCalledWith(1, 'mockToken');
    });

    it('should return null if credentials are invalid', async () => {
      jest.spyOn(bcrypt, 'compare').mockResolvedValue(false as never); 

      const result = await authService.signIn('test@example.com', 'wrongPassword');
      expect(result).toBeNull();
    });
  });
});