import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";


@Entity()
export class NutritionPlan {

    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column()
    title!: string;

    @Column({ type: "json" })
    meals!: any;

    @CreateDateColumn()
    createdAt!: Date;

    @ManyToOne(() => User, (user) => user.nutritionPlans, { onDelete: "CASCADE" })
    user!: User;
}