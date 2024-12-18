import { Injectable } from '@nestjs/common'
import { TResponse } from '../typings/response'

@Injectable()
export class AppService {
  getHello(): TResponse<string> {
    return {
      status: 'success',
      data: 'Hello World!'
    }
  }
}
