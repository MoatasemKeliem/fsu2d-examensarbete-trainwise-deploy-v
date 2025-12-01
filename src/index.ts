import express from "express"

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hello Examensarbetet!")
})

app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`)
})