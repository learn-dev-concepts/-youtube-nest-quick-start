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
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  getUsers() {
    return this.userService.fetchUsers();
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
