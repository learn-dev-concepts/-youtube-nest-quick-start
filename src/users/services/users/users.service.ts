import { Injectable } from '@nestjs/common';

import { CreateUserType } from 'src/utils/types';

@Injectable()
export class UsersService {
  // will be replaced by db logic
  private fakeUsers = [
    { id: 1, username: 'Anson', email: 'anson@gmail.com' },
    { id: 2, username: 'Corey', email: 'Corey@gmail.com' },
  ];

  fetchUsers() {
    return this.fakeUsers;
  }

  createUser(userPayload: CreateUserType) {
    this.fakeUsers.push(userPayload);
  }

  fetchUserById(userId: number) {
    const user = this.fakeUsers.filter(({ id }) => userId === id);
    if (user.length === 0) {
      return null;
    } else {
      return user;
    }
  }
}
