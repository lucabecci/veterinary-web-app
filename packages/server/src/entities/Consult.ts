import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Pet } from "./Pet";
import { User } from "./User";

@Entity()
export class Consult extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    problem: string

    @Column()
    description: string

    @Column()
    date: Date

    @Column()
    hour: number

    @ManyToOne(() => User, user => user.consults)
    user: User;

    @ManyToOne(() => Pet, pet => pet.consults)
    pet: Pet;
}
