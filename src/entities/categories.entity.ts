import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { real_state } from "./real_state.entity";


@Entity("categories")
export class Categories {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({type: 'varchar', length: 45, unique: true, nullable: false})
    name: string
}