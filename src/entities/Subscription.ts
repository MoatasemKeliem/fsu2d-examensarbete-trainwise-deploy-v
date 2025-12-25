import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class Subscription {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column()
    stripeSubscription!: string;

    @Column()
    planId!: string;

    @Column()
    planName!: "basic" | "premium"

    @Column({ default: "inactive" })
    status!: "inactive" | "active";

    @CreateDateColumn()
    createdAt!: string;

    @Column()
    stripeCustomerId!: string;

    @ManyToOne(() => User, (user) => user.subscriptions, { onDelete: "CASCADE" })
    user!: User;
}