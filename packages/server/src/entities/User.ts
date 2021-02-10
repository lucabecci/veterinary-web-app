import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Consult } from "./Consult";
import { Pet } from "./Pet";

@Entity()
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: string;

    @Column({
        unique: true
    })
    email: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    password: string

    @Column({
        default: "normal"
    })
    type: string

    @Column()
    registered: string //if the user is registered with jwt or google

    @OneToMany(() => Pet, pet => pet.user)
    pets: Pet[];

    @OneToMany(() => Consult, consult => consult.user)
    consults: Consult[];
}
