import { Injectable } from "@nestjs/common"
import { CreateUserDto } from "./dto/create-user.dto"
import { UpdateUserDto } from "./dto/update-user.dto"
import { Repository } from "typeorm"
import { User } from "./entities/user.entity"
import { InjectRepository } from "@nestjs/typeorm"
import { Listing } from "src/listing/entities/listing.entity"

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,

        @InjectRepository(Listing)
        private listingRepository: Repository<Listing>,
    ) {}

    async create(createUserDto: CreateUserDto) {
        const user = await this.userRepository.save({
            name: createUserDto.name,
        })

        this.listingRepository.save({
            author: user,
            content: "i have a bunch of niggers for sale",
            title: "Niggers for sale",
        })

        return user
    }

    findAll() {
        return this.userRepository.find()
    }

    findOne(id: number) {
        return this.userRepository.findOneBy({ id })
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        return this.userRepository.update({ id }, updateUserDto)
    }

    remove(id: number) {
        return this.userRepository.delete({ id })
    }
}
