/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get() // GET /users or /users?role=value
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  findAllUsers(@Query('role') role?: 'ADMIN' | 'COMPLIANCE') {
    return [];
  }

  @Get(':id') // GET /user/:id
  findOneUser(@Param('id') id: string) {
    return { id };
  }

  @Post() // POST /user
  createUser(@Body() user: object) {
    return user;
  }

  @Patch(':id') // PATCH /user/:id
  updateUser(@Param('id') id: string, @Body() userUpdate: object) {
    return { id, ...userUpdate };
  }

  @Delete(':id') // DELETE /user/:id
  deleteUser(@Param('id') id: string) {
    return `user with id ${id} has been successfully deleted`;
  }
}
