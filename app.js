import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import path from 'path'

let app = express()

app.use(morgan('dev'))

dotenv.config({path:'config/config.env'})
let port = process.env.PORT
let host = process.env.HOST

app.get("/", (req,resp) => {
    resp.sendFile(path.join(process.cwd(),"public", 'index.html'))
})

app.get("/about", (req,resp) => {
    resp.sendFile(path.join(process.cwd(), "public", 'about.html'))
})

app.get("/contact", (req,resp) => {
    resp.sendFile(path.join(process.cwd(), "public", 'contact.html'))
})

app.get("/login", (req,resp) => {
    resp.sendFile(path.join(process.cwd(), "public", 'login.html'))
})

app.listen(port,host, (err) => {
    if(err) throw err

    console.log(`Server is running at port: ${port} with hostname: ${host}`)
    console.log(`http://${host}:${port}`)
})