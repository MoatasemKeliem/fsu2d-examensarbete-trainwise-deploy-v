import express from "express"
import { AppDataSource } from "./data-source";
import cookieParser from "cookie-parser";
import nativeRoute from "./routes/native-auth";

const app = express();
const PORT = 3000;

app.use(express.json())
app.use(cookieParser())
app.use("/native-auth", nativeRoute)


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