import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Consult } from "./Consult";
import { User } from "./User";

@Entity()
export class Pet extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string

    @Column()
    age: number

    @Column()
    race: string

    @ManyToOne(() => User, user => user.pets)
    user: User;

    @OneToMany(() => Consult, consult => consult.pet)
    consults: Consult[];
}
