import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Addresses } from "./addresses.entity";
import { Categories } from "./categories.entity";


@Entity("real_state")
export class real_state {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({type: 'boolean', default: false})
    sold: boolean;

    @Column({ type: 'decimal', precision: 12, scale: 2 , default: 0, nullable: true})
    value: number;

    @Column({type: "integer", nullable: false })
    size: number;

    @CreateDateColumn({type: 'date', nullable: false})
    createdAt?: Date;

    @UpdateDateColumn({type: 'date', nullable: false })
    updatedAt?: Date;

    @OneToOne(() => Addresses)
    @JoinColumn()
    addresses: Addresses;

    @ManyToOne(() => Categories )
    categories: Categories;
}