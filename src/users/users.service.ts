import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

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
      name: 'John Isaac',
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
      const rolesArray = this.users.filter((user) => user.role === role);
      if (rolesArray.length === 0)
        throw new NotFoundException('User role not found');
      return rolesArray;
    }
    return this.users;
  }

  findOneUser(id: number) {
    const user = this.users.find((user) => user.id === id);

    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  createUser(createUserDto: CreateUserDto) {
    const userByHighestId = [...this.users].sort((a, b) => b.id - a.id);
    const newUser = {
      id: userByHighestId[0].id + 1,
      ...createUserDto,
    };
    this.users.push(newUser);
    return newUser;
  }

  updateUser(id: number, updateUserDto: UpdateUserDto) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updateUserDto };
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
