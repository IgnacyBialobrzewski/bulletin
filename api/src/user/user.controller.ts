import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from "@nestjs/common"
import { UserService } from "./user.service"
import { CreateUserDto } from "./dto/create-user.dto"
import { UpdateUserDto } from "./dto/update-user.dto"

@Controller("user")
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto)
    }

    @Get()
    findAll() {
        return this.userService.findAll()
    }

    @Get(":id")
    async findOne(@Param("id") id: string) {
        const user = await this.userService.findOne(+id)

        if (!user) {
            throw new NotFoundException()
        }

        return user
    }

    @Patch(":id")
    async update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
        const updateResult = await this.userService.update(+id, updateUserDto)

        if (!updateResult.affected) {
            throw new NotFoundException()
        }
    }

    @Delete(":id")
    async remove(@Param("id") id: string) {
        const deleteResult = await this.userService.remove(+id)

        if (!deleteResult.affected) {
            throw new NotFoundException()
        }
    }
}
