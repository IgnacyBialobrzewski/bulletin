import { User } from "src/user/entities/user.entity"
import { Column, CreateDateColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

export class Listing {
    @PrimaryGeneratedColumn()
    id: number

    @CreateDateColumn()
    date: Date

    @ManyToOne(() => User, (user) => user.listings)
    author: User

    @Column({length: 30})
    title: string

    @Column({length: 500})
    content: string
}