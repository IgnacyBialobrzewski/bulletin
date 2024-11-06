import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { ConfigModule } from "@nestjs/config"
import { UserController } from "./user/user.controller"
import { UserModule } from "./user/user.module"
import { UserService } from "./user/user.service"

@Module({
    imports: [
        ConfigModule.forRoot(),
        TypeOrmModule.forRoot({
            type: "postgres",
            host: process.env.DB_HOST,
            database: process.env.DB_NAME,
            username: process.env.DB_USER,
            port: +process.env.DB_PORT!,
            password: process.env.DB_PASS,
            entities: [__dirname + "/../**/*.entity.js"],
            logger: "debug",
            synchronize: true
        }),
        UserModule,
    ],
    controllers: [UserController],
    providers: [UserService],
})
export class AppModule {
    constructor() {}
}
