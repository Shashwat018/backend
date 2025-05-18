import cookieParser from "cookie-parser";
import cors from "cors";
import express, { urlencoded } from "express";

export default app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({
    limit: "10kb"
}))

app.use(express.urlencoded({
    extended: true, /* nested object bhi receive kr skta hai url request */
    limit: "10kb" /* limit of url request  */
}))

app.use(express.static("pubic"))

app.use(cookieParser())