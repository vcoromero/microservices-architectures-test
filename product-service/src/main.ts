import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ReflectionService } from '@grpc/reflection';
import { MicroserviceOptions } from '@nestjs/microservices';
import { configDotenv } from 'dotenv';
import { join } from 'path';

configDotenv({ path: join(__dirname, '../../.env') });

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      options: {
        port: parseInt(process.env.PRODUCT_SERVICE_PORT, 10),
        onLoadPackageDefinition: (pkg, server) => {
          new ReflectionService(pkg).addToServer(server);
        },
      },
    },
  );
  await app.listen();
}
bootstrap();
