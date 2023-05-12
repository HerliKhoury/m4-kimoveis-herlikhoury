import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { RealEstate } from "./real_state.entity";
import { User } from "./users.entity";


@Entity("schedule")
export class Schedule {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({type: 'date', nullable: false })
    date: Date;

    @Column({type: 'time', nullable: false})
    hour: string;

    @ManyToOne(() => RealEstate )
    realEstate: RealEstate;

    @ManyToOne(() => User )
    user: User;
}