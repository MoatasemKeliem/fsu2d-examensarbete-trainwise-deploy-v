import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class NutritionPlan {

    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column()
    title!: string;

    @Column()
    meals!: string;

    @Column()
    createdAt!: Date;
}