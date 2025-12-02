import { Column, CreateDateColumn, PrimaryGeneratedColumn } from "typeorm";


export class TrainingLog {
    @PrimaryGeneratedColumn()
    id!: string;

    @Column()
    workoutSummary!: string;

    @Column()
    aiFeedback!: string;

    @CreateDateColumn()
    createdAt!: Date;
}