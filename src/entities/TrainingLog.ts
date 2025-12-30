import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class TrainingLog {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column("text")
    workoutSummary!: string;

    @Column("json")
    aiFeedback!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @Column({ type: "varchar", length: 36, collation: "utf8mb4_general_ci" })
    userId!: string;

    @ManyToOne(() => User, user => user.trainingLogs, { onDelete: "CASCADE", nullable: false })
    @JoinColumn({ name: "userId" })
    user!: User;

}