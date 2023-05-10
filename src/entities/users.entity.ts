import { hash } from "bcryptjs";
import { BeforeInsert, Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("user")
export class User {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({type: 'varchar', length: 45, nullable: false })
    name: string;

    @Column({type: 'varchar', length: 45, unique: true, nullable: false})
    email: string;

    @Column({type: 'boolean', default: false})
    admin: boolean;

    @Column({type: 'varchar', length: 120, nullable: false})
    password: string;

    @CreateDateColumn({type: 'date', nullable: false})
    createdAt: string;

    @UpdateDateColumn({type: 'date', nullable: false})
    updatedAt: string;

    @DeleteDateColumn({type: 'date', nullable: true })
    deletedAt: string | null | undefined;

    @BeforeInsert()
    async hashPassword() {
        this.password = await hash(this.password, 10);
    }
}