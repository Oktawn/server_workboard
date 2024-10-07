import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Columns } from "./column.entity";
import { Comments } from "./comments.entity";
import { User } from "./user.entity";

@Entity({ 'name': 'cards' })
export class Card {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @ManyToOne(() => Columns, column => column.cards)
    status: Columns;

    @OneToMany(() => Comments, comment => comment.card)
    comments: Comments[]

    @ManyToOne(() => User, user => user.cards)
    user: User

}