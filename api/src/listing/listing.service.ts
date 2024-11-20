import { Injectable } from "@nestjs/common"
import { CreateListingDto } from "./dto/create-listing.dto"
import { UpdateListingDto } from "./dto/update-listing.dto"
import { InjectRepository } from "@nestjs/typeorm"
import { Listing } from "./entities/listing.entity"
import { Repository } from "typeorm"

@Injectable()
export class ListingService {
    constructor(
        @InjectRepository(Listing)
        private listingRepository: Repository<Listing>,
    ) {}

    create(createListingDto: CreateListingDto) {
        return "This action adds a new listing"
    }

    findAll() {
        return this.listingRepository.find({
            relations: { author: true },
        })
    }

    findOne(id: number) {
        return this.listingRepository.findOneBy({ id })
    }

    update(id: number, updateListingDto: UpdateListingDto) {
        return `This action updates a #${id} listing`
    }

    remove(id: number) {
        return `This action removes a #${id} listing`
    }
}
