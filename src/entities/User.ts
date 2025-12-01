import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

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

    @CreateDateColumn()
    createdAt!: Date
}