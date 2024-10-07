import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Card } from "./card.entity";
import { User } from "./user.entity";


@Entity()
export class Comments {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    comment: string;

    @ManyToOne(() => Card, card => card.comments)
    card: Card

    @ManyToOne(() => User, user => user.comments)
    user: User;
}