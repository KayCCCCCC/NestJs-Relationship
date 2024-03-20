import { City } from "src/cities/entities/city.entity"
import { Leader } from "src/leaders/entities/leader.entity"
import { Timezone } from "src/timezones/entities/timezone.entity"
import { Column, Entity, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: 'countries' })
export class Country {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ unique: true })
    name: string

    @OneToOne(() => Leader, (leader) => leader.country)
    leader: Leader

    @OneToMany(() => City, (city) => city.country)
    cities: City[]

    @ManyToMany(() => Timezone, (timezone) => timezone.countries)
    @JoinTable({
        name: "country-timezone",
        joinColumn: {
            name: 'country_id',
            referencedColumnName: 'id',
            foreignKeyConstraintName: 'country_timezone_country_id'
        },
        inverseJoinColumn: {
            name: 'timezone_id',
            referencedColumnName: 'id',
            foreignKeyConstraintName: 'country_timezone_timezone_id'
        }
    })
    timezones: Timezone[]
}
