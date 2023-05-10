import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Address } from "./addresses.entity";
import { Category } from "./categories.entity";


@Entity("RealEstate")
export class RealEstate {
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

    @OneToOne(() => Address)
    @JoinColumn()
    addresses: Address;

    @ManyToOne(() => Category )
    category: Category;
}