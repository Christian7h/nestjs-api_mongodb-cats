import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Escucha en el puerto asignado por Vercel o usa el puerto local 3000
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
