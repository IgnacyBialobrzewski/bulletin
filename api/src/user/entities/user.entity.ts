import { Listing } from "src/listing/entities/listing.entity"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 32 })
    name: string

    @OneToMany(() => Listing, (listing) => listing.author)
    listings: Listing[]
}
