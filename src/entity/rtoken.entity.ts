import { Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { User } from "./user.entity";
import { UUID } from "crypto";


@Entity({ name: 'refresh_token' })
export class RefreshToken {

    @PrimaryColumn("uuid")
    token: UUID;

    @OneToOne(() => User)
    @JoinColumn()
    user: User
}