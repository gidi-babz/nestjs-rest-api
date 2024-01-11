import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      id: '',
      name: 'John Smith',
      email: 'john.smith@gmail.com',
      role: 'Admin',
    },
    {
      id: '',
      name: 'John Doe',
      email: 'john.doe@gmail.com',
      role: 'Compliance',
    },
    {
      id: '',
      name: 'John Terry',
      email: 'john.T@gmail.com',
      role: 'Finance',
    },
  ];
}
