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
  findOneUser(@Param('id') id: string) {
    return this.usersService.findOneUser(+id);;
  }

  @Post() // POST /user
  createUser(@Body() user: {
    name: string;
    email: string;
    role: 'INTERN' | 'COMPLIANCE' | 'ADMIN';
  }) {
    return this.usersService.createUser(user);
  }

  @Patch(':id') // PATCH /user/:id
  updateUser(@Param('id') id: string, @Body() userUpdate: object) {
    return { id, ...userUpdate };
  }

  @Delete(':id') // DELETE /user/:id
  deleteUser(@Param('id') id: string) {
    return this.usersService.deleteUser(+id);
  }
}


