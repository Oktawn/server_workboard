import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Columns } from "./column.entity";


@Entity({ 'name': 'user' })
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ 'unique': true })
    email: string;

    @Column()
    password: string;

    @OneToMany(()=>Columns, column => column.user)
    columns: Columns[]

}
