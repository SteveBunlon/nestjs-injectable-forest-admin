import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ForestService } from './forest/forest.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const faService = app.get(ForestService);
  await faService.getAgent().mountOnNestJs(app).start();
  await app.listen(3000);
}
bootstrap();
