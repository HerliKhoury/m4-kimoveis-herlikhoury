import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { real_state } from "./real_state.entity";
import { Users } from "./users.entity";


@Entity("schedules")
export class Schedules {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({type: 'date', nullable: false })
    date: Date;

    @Column({type: 'time', nullable: false})
    hour: string;

    @ManyToOne(() => real_state )
    real_state: real_state;

    @ManyToOne(() => Users )
    users: Users;
}