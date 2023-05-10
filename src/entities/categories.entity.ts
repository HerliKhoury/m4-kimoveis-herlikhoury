import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";



@Entity("category")
export class Category {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({type: 'varchar', length: 45, unique: true, nullable: false})
    name: string
}