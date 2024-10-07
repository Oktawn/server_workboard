import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Columns } from "./column.entity";
import { Card } from "./card.entity";
import { Comments } from "./comments.entity";


@Entity({ 'name': 'user' })
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ 'unique': true })
    email: string;

    @Column()
    password: string;

    @OneToMany(() => Columns, column => column.user)
    columns: Columns[]

    @OneToMany(() => Card, card => card.user)
    cards: Card[]

    @OneToMany(() => Comments, comment => comment.user)
    comments: Comments[]

}
