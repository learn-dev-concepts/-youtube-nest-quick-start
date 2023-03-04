import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
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
    return total;
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number, @Res() res: Response) {
    const user = this.userService.fetchUserById(id);
    if (!user)
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);

    return user;
  }

  @Post()
  @UsePipes(new ValidationPipe())
  createUser(@Body() userPayload: CreateUserDto) {
    return this.userService.createUser(userPayload);
  }
}
