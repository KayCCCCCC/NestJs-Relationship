import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'country-timezone' })
export class CountryTimezone {
    @PrimaryGeneratedColumn()
    country_id: number

    @PrimaryGeneratedColumn()
    timezone_id: number

    @Column({ nullable: true })
    status: string
}