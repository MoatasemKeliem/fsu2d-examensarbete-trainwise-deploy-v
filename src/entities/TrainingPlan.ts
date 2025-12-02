import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

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

    @ManyToOne(() => User, (user) => user.trainingPlans, { onDelete: "CASCADE" })
    user!: User;
}