import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'John Smith',
      email: 'john.smith@gmail.com',
      role: 'INTERN',
    },
    {
      id: 2,
      name: 'John Doe',
      email: 'john.doe@gmail.com',
      role: 'COMPLIANCE',
    },
    {
      id: 3,
      name: 'John Terry',
      email: 'john.T@gmail.com',
      role: 'FINANCE',
    },
  ];

  findAllUsers(role?: 'ADMIN' | 'COMPLIANCE' | 'INTERN') {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }
    return this.users;
  }

  findOneUser(id: number) {
    const user = this.users.find((user) => user.id === id);
    return user;
  }

  createUser(user: {
    name: string;
    email: string;
    role: 'INTERN' | 'COMPLIANCE' | 'ADMIN';
  }) {
    const userByHighestId = [...this.users].sort((a, b) => b.id - a.id);
    const newUser = {
      id: userByHighestId[0].id + 1,
      ...user,
    };
    this.users.push(newUser);
    return newUser;
  }

  updateUser(
    id: number,
    updatedUser: {
      name?: string;
      email?: string;
      role?: 'INTERN' | 'COMPLIANCE' | 'ADMIN';
    },
  ) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updatedUser };
      }
      return user;
    });
    return this.findOneUser(id);
  }

  deleteUser(id: number) {
    const removedUser = this.findOneUser(id);
    this.users = this.users.filter((user) => user.id !== id);
    return removedUser;
  }
}
