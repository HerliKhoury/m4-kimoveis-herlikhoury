import { Column, CreateDateColumn, DeepPartial, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Address } from "./addresses.entity";
import { Category } from "./categories.entity";
import { Schedule } from "./schedules.entity";


@Entity("RealEstate")
export class RealEstate {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({type: 'boolean', default: false})
    sold: boolean | undefined;

    @Column({ type: 'decimal', precision: 12, scale: 2 , default: 0})
    value: number | string ;

    @Column({type: "integer", nullable: false })
    size: number;

    @CreateDateColumn({type: 'date', nullable: false})
    createdAt: string | Date;

    @UpdateDateColumn({type: 'date', nullable: false })
    updatedAt: string |  Date;

    @OneToOne(() => Address)
    @JoinColumn()
    address: Address;

    @ManyToOne(() => Category , (category) => category.realEstate)
    category: Category;

    @OneToMany(() => Schedule, (schedules) => schedules.realEstate)
    schedules: Schedule[];
}