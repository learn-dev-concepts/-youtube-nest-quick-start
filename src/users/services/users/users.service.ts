import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  // will be replaced by db logic
  private fakeUsers = [
    { username: 'Anson', email: 'anson@gmail.com' },
    { username: 'Corey', email: 'Corey@gmail.com' },
  ];

  fetchUsers() {
    return this.fakeUsers;
  }
}
