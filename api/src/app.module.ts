import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { ConfigModule } from "@nestjs/config"
import { UserModule } from "./user/user.module"
import { ListingModule } from "./listing/listing.module"

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
            synchronize: true,
        }),
        UserModule,
        ListingModule,
    ],
})
export class AppModule {
    constructor() {}
}
