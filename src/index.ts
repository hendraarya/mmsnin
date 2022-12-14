import express, { Express, json, urlencoded } from "express";
import cors from "cors";
import { route } from "./routes/route";

// const express = require("express");
// const bodyParser = require("body-parser");

const app: Express = express();
const corsOptions = {
    origin: "http://localhost:8081",
};
const port = 3001;

app.use(express.static("public"));
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(route);

// app.use(bodyParser.json());
// app.use(
//     bodyParser.urlencoded({
//         extended: true
//     })
// )

//simple route
app.get("/", (request, response) => {
    response.json({
        info: 'Hello world!!'
    });
})

// set port, listen for requests
app.listen(port, () => {
    console.log("Server is running on  port" + port);
});



