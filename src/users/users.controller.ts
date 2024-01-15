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
  ParseIntPipe,
  ValidationPipe
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

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
  createUser(@Body(ValidationPipe) createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  @Patch(':id') // PATCH /users/:id
  updateUser(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) updateUserDto: UpdateUserDto) {
    return this.usersService.updateUser(id, updateUserDto);
  }

  @Delete(':id') // DELETE /users/:id
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.deleteUser(id);
  }
}


