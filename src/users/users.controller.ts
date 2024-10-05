import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { LoginDto, UserDto } from './users.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post('signup')
  async createUser(@Body() user: UserDto) {
    return await this.usersService.signUp(user);
  }

  @Post('login')
  @HttpCode(200)
  async login(@Body() credentials: LoginDto) {
    return this.usersService.login(credentials);
  }
}
