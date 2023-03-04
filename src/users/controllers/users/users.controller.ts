import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDto } from 'src/users/dtos/createUser.dto';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return [{ username: 'Anson', email: 'anson@gmail.com' }];
  }

  @Get('query')
  getUsersWithQuery(@Query('test') total: any) {
    console.log(total);
    return total;
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return { id };
  }

  @Post()
  createUser(@Body() userPayload: CreateUserDto) {
    console.log('userPayload', userPayload.email);
    return {};
  }
}
