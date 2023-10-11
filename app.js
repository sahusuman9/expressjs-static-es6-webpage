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



// The selected text is a script written in Node.js using the Express.js framework. Here's what it does:

// - **Imports modules**: It imports the `express`, `dotenv`, `morgan`, and `path` modules.
// - **Initializes Express**: It creates an instance of an Express application.
// - **Uses middleware**: It uses the `morgan` middleware for logging HTTP requests.
// - **Configures dotenv**: It configures `dotenv` to load environment variables from a `.env` file.
// - **Sets up routes**: It sets up routes for the root URL ("/") and "/about", "/contact", and "/login" endpoints. Each route sends an HTML file as a response.
// - **Starts the server**: It starts the server on a port and host specified in the environment variables. It logs a message when the server is running.

// This script is a basic setup for a web server that can serve static HTML files. The server logs all incoming HTTP requests, which can be useful for debugging. The use of environment variables for configuration makes the script flexible and secure. The server serves different HTML files depending on the route accessed by the client. This is a common pattern in web development, where different URLs correspond to different pages on a website. The script also handles errors that might occur when starting the server.