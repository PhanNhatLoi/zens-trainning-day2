import { Controller, Get, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Get()
  getHello(): string {
    return 'Hello';
  }
}
