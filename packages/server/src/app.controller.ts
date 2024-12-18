import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'
import { TResponse } from '../typings/response'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): TResponse<string> {
    return this.appService.getHello()
  }
}
