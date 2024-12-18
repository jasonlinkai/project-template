import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { INestApplication } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

function builApiDocumentation(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('My API')
    .setDescription('API documentation')
    .setVersion('1.0')
    .addBearerAuth() // 可選：加入認證
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)

  // 將 Swagger JSON 文件保存到本地，供其他工具使用
  import('fs').then((fs) => {
    fs.writeFileSync('./swagger.json', JSON.stringify(document, null, 2))
  })
}

function enableCorsForLocal(app: INestApplication) {
  const configService = app.get(ConfigService)
  const clientDomain = configService.get<string>('CLIENT_DOMAIN')
  app.enableCors({
    origin: [clientDomain], // Frontend URL during development
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true // Allow cookies, Authorization headers, etc.
  })
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  builApiDocumentation(app)
  enableCorsForLocal(app)
  await app.listen(process.env.PORT ?? 3001)
}
bootstrap()
