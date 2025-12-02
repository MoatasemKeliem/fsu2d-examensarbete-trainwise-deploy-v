import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TrainingPlan {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column()
    title!: string

    @Column()
    plan!: string

    @CreateDateColumn()
    createdAt!: Date;

}