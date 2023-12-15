const express = require("express")
const port = process.env.PORT || 5000;
const app = express();

app.get("/", async(req, res) => {
    res.send("Hello world");
})

app.listen(port, (err) => {
    console.log("server is running on port ", port);
})