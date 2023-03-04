import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDto } from 'src/users/dtos/createUser.dto';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return [{ username: 'Anson', email: 'anson@gmail.com' }];
  }

  @Post()
  createUser(@Body() userPayload: CreateUserDto) {
    console.log('userPayload', userPayload.email);
    return {};
  }
}
