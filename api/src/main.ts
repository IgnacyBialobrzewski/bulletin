import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"

async function bootstrap() {
    console.log(process.env.DB_PASS, process.env.DB_PORT, process.env.DB_NAME, process.env.DB_USER, process.env.DB_HOST)

    const app = await NestFactory.create(AppModule, { cors: { origin: "*" } })
    await app.listen(process.env.PORT ?? 3000)
}

bootstrap()
