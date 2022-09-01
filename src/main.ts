import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from "./app.module";


async function start() {

    const PORT = process.env.PORT || 5000;

    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
        .setTitle('Users authorization')
        .setDescription('REST API for users authorization')
        .setVersion('1.0.0')
        .addTag('ilyas')
        .build();

    const document = SwaggerModule.createDocument(app, config);

    SwaggerModule.setup('/api/docs', app, document);

    await app.listen(PORT, () => console.info(`Server started on port: ${PORT}`));
}

start();