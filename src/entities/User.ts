import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { TrainingPlan } from "./TrainingPlan";
import { NutritionPlan } from "./NutritionPlan";
import { TrainingLog } from "./TrainingLog";
import { Subscription } from "./Subscription";

@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column("varchar", { unique: true, nullable: true })
    email!: string | null;

    @Column("varchar", { nullable: true })
    name!: string | null

    @Column("varchar", { nullable: true })
    password!: string | null;

    @Column("varchar", { default: "user" })
    role!: "user" | "admin"

    @Column("varchar", { nullable: true })
    provider!: string;

    @Column("varchar", { nullable: true })
    providerId!: string | null;

    @CreateDateColumn()
    createdAt!: Date

    @OneToMany(() => TrainingPlan, (trainingPlan) => trainingPlan.user)
    trainingPlans!: TrainingPlan[];

    @OneToMany(() => NutritionPlan, (nutritionPlan) => nutritionPlan.user)
    nutritionPlans!: NutritionPlan[];

    @OneToMany(() => TrainingLog, (trainingLog) => trainingLog.user)
    trainingLogs!: TrainingLog[];

    @OneToMany(() => Subscription, (subscription) => subscription.user)
    subscriptions!: Subscription[];
}