import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";
import { Card } from "./card.entity";


@Entity({ name: 'column' })
export class Columns {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ 'unique': true })
    name: string;

    @ManyToOne(() => User, user => user.columns)
    user: User;

    @OneToMany(() => Card, card => card.status)
    cards: Card[]
}