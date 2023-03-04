import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ExampleMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;

    if (!authorization)
      throw new HttpException('No auth', HttpStatus.FORBIDDEN);

    if (authorization !== '123') {
      throw new HttpException('Invalid token', HttpStatus.FORBIDDEN);
    } else {
      next();
    }
  }
}
