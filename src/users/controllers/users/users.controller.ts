import {
  Body,
  Controller,
  Get,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Post,
  Query,
  Req,
  Res,
  UsePipes,
  ValidationPipe,
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
  getUsersWithQuery(@Query('sortDesc', ParseBoolPipe) total: boolean) {
    console.log(total);
    return total;
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    console.log(typeof id);
    return { id };
  }

  @Post()
  @UsePipes(new ValidationPipe())
  createUser(@Body() userPayload: CreateUserDto) {
    console.log('userPayload', userPayload.email);
    return {};
  }
}
