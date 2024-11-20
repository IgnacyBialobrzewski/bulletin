import { User } from "src/user/entities/user.entity"
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Listing {
    @PrimaryGeneratedColumn()
    id: number

    @CreateDateColumn()
    date: string

    @ManyToOne(() => User, (user) => user.listings)
    author: User

    @Column({ length: 30 })
    title: string

    @Column({ length: 500 })
    content: string
}
