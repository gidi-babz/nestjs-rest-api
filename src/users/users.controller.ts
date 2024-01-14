/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  ParseIntPipe
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get() // GET /users or /users?role=value
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  findAllUsers(@Query('role') role?: 'ADMIN' | 'COMPLIANCE' | 'INTERN') {
    return this.usersService.findAllUsers(role);
  }

  @Get(':id') // GET /users/:id
  findOneUser(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOneUser(id);
  }

  @Post() // POST /users
  createUser(@Body() user: {
    name: string;
    email: string;
    role: 'INTERN' | 'COMPLIANCE' | 'ADMIN';
  }) {
    return this.usersService.createUser(user);
  }

  @Patch(':id') // PATCH /users/:id
  updateUser(@Param('id', ParseIntPipe) id: number, @Body() userUpdate: {
    name: string;
    email: string;
    role: 'INTERN' | 'COMPLIANCE' | 'ADMIN';
  }) {
    return this.usersService.updateUser(id, userUpdate);
  }

  @Delete(':id') // DELETE /users/:id
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.deleteUser(id);
  }
}


