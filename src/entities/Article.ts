import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Article {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column()
    title!: String;

    @Column()
    category!: String;

    @Column()
    content!: string;

    @CreateDateColumn()
    createdAt!: Date;
}