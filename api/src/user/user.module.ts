import { Module } from "@nestjs/common"
import { UserService } from "./user.service"
import { UserController } from "./user.controller"
import { TypeOrmModule } from "@nestjs/typeorm"
import { User } from "./entities/user.entity"
import { ListingModule } from "src/listing/listing.module"

@Module({
    imports: [TypeOrmModule.forFeature([User]), ListingModule],
    exports: [TypeOrmModule],
    controllers: [UserController],
    providers: [UserService],
})
export class UserModule {}
