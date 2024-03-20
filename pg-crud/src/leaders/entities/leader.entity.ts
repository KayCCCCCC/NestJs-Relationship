import { Country } from "src/countries/entities/country.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'leaders' })
export class Leader {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ unique: true })
    name: string

    @Column({ name: 'country_id' })
    countryId: number

    @OneToOne(() => Country, (country) => country.leader)
    @JoinColumn({ name: 'country_id' })
    country: Country
}
