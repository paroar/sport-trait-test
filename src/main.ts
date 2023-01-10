import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CORS } from './constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  app.enableCors(CORS);

  const configService = app.get(ConfigService);

  await app.listen(configService.get('PORT'));
  console.log(`Application running on: ${await app.getUrl()}`);
}
bootstrap();
