import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { ConfigModule } from "@nestjs/config"
import { readFileSync } from "fs"
import { UserController } from "./user/user.controller"
import { User } from "./user/entities/user.entity"
import { UserModule } from "./user/user.module"
import { UserService } from "./user/user.service"
import path from "path"

@Module({
    imports: [
        ConfigModule.forRoot(),
        TypeOrmModule.forRoot({
            type: "postgres",
            host: process.env["DB_HOST"],
            database: process.env["DB_NAME"],
            username: process.env["DB_USER"],
            port: +process.env["DB_PORT"]!,
            password: process.env["DB_PASSWORD"],
            entities: [__dirname + "/../**/*.entity.js"],
            synchronize: true,
            ssl: {
                ca: readFileSync("./global-bundle.pem"),
                rejectUnauthorized: true,
                requestCert: true,
            },
        }),
        UserModule,
    ],
    controllers: [UserController],
    providers: [UserService],
})
export class AppModule {
    constructor() {}
}
