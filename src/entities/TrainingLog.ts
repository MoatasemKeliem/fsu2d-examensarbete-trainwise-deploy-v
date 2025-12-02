import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class TrainingLog {
    @PrimaryGeneratedColumn()
    id!: string;

    @Column()
    workoutSummary!: string;

    @Column()
    aiFeedback!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @ManyToOne(() => User, user => user.trainingLogs, { onDelete: "CASCADE" })
    user!: User;
}