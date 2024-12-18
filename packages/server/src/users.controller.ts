import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

@ApiTags('Users') // Swagger 分類
@Controller('users')
export class UsersController {
  @Get()
  @ApiResponse({ status: 200, description: 'Retrieve all users' })
  getAllUsers() {
    return [{ id: 1, name: 'John Doe', email: 'john@example.com' }];
  }

  @Post()
  @ApiResponse({ status: 201, description: 'Create a new user' })
  createUser(@Body() createUserDto: CreateUserDto) {
    return { id: 2, ...createUserDto };
  }
}
