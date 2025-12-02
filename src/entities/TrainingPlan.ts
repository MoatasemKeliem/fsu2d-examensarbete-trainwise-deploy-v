import { Column, PrimaryGeneratedColumn } from "typeorm";

export class TrainingPlan {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column()
    title!: string

    @Column()
    plan!: string

    @Column()
    createdAt!: Date;

}