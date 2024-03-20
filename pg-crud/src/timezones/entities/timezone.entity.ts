import { Country } from "src/countries/entities/country.entity"
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: 'timezones' })
export class Timezone {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ unique: true })
    zone: string

    @ManyToMany(() => Country, (country) => country.timezones)
    countries: Country[]
}
