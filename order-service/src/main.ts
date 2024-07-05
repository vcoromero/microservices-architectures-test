import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ReflectionService } from '@grpc/reflection';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { config as configDotenv } from 'dotenv';
import { join } from 'path';

configDotenv({ path: join(__dirname, '../../../.env') });

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        url: `localhost:${process.env.ORDER_SERVICE_PORT}`,
        package: 'order',
        protoPath: join(
          __dirname,
          '..',
          '..',
          '..',
          'microservices-architectures-test',
          'grpc-protocols',
          'proto',
          'order.proto',
        ),
        onLoadPackageDefinition: (pkg, server) => {
          new ReflectionService(pkg).addToServer(server);
        },
      },
    },
  );
  await app.listen();
}
bootstrap();
