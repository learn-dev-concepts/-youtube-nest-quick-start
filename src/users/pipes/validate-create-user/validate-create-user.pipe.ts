import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/createUser.dto';

@Injectable()
export class ValidateCreateUserPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('validate');
    console.log('value', value);
    console.log('metadata', metadata);
    const parseAgeToInt = parseInt(value.age);
    if (isNaN(parseAgeToInt)) {
      console.log('not number');
      throw new HttpException('invald', HttpStatus.BAD_REQUEST);
    }

    return { ...value, age: parseAgeToInt };
  }
}
