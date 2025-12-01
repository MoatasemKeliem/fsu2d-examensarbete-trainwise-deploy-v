import express from "express"
import { AppDataSource } from "./data-source.js";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hello Examensarbetet!")
})

const startDatabase = async () => {
    try {
        await AppDataSource.initialize()
    } catch (error) {
        console.error("ERROR: Couldn't connect to database!", error)
    }
}

startDatabase()

app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`)
})