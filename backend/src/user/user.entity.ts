import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number
    @Column({
        length: 50,
        type: 'varchar',
    })
    name: string
    @Column({
        type: 'boolean',
        name: 'is_safe_city',
    })
    isSafeCity: boolean
    @Column({
        type: 'date',
        name: 'last_visit_date',
    })
    lastVisitDate: Date
    @Column({
        type: 'int',
        name: 'qty_visits',
    })
    qtyVisits: number
    @Column({
        type: 'varchar',
        name: 'places_to_visit',
    })
    placesToVisit: string
}