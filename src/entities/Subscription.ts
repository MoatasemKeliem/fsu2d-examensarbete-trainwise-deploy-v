import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Subscription {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column()
    stripeSubscription!: string;

    @Column()
    planId!: string;

    @Column({ default: "inactive" })
    status!: "inactive" | "actice";

    @CreateDateColumn()
    createdAt!: string;

    @Column()
    stripeCustomerId!: string;
}