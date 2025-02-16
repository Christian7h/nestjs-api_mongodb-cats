import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';  // Importa el módulo de CORS

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*', // Permite cualquier dominio. Para producción, puedes especificar un dominio específico en lugar de '*'
  });
  // Escucha en el puerto asignado por Vercel o usa el puerto local 3000
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
