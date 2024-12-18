import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UsersController } from './users.controller'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true // Makes the config globally available throughout the app
    })
  ],
  controllers: [AppController, UsersController],
  providers: [AppService]
})
export class AppModule {}
