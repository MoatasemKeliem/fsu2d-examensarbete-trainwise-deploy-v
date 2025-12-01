import * as dotenv from "dotenv"
import { DataSource } from "typeorm"

dotenv.config({ quiet: true })

const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE } = process.env

if (!DB_HOST || !DB_PORT || !DB_USERNAME || DB_DATABASE == undefined) {
    console.log(DB_HOST)
    console.log(DB_PORT)
    console.log(DB_USERNAME)
    console.log(DB_PASSWORD)
    console.log(DB_DATABASE)
    throw new Error("Databse is missing env or isn't configured correctly")
}

export const AppDataSource = new DataSource({
    type: "mysql",
    host: DB_HOST,
    port: parseInt(DB_PORT),
    username: DB_USERNAME,
    password: DB_PASSWORD!,
    database: DB_DATABASE,
    synchronize: true,
    entities: []
})