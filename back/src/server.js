const path = require("path")
const express = require("express")
const hbs = require("hbs")
const cors = require("cors")

const runScript = require("./utils/runScript")
const statusScript = require("./utils/statusScript")

const app = express()

// Define paths for express config
const publicDirPath = path.join(__dirname, "../public")
const viewsPath = path.join(__dirname, "../templates/views")
const partialsPath = path.join(__dirname, "../templates/partials")

// Setup handlebars engine and views location
app.set("view engine", "hbs")
app.set("views", viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory
app.use(express.static(publicDirPath))

app.get("/status", cors(), (req, res) => {
    if (!req.query.code) {
        return res.send({
            error: "You must provide a code for getting a status..."
        })
    }

    statusScript(req.query.code, (error, results) => {
        if (error) {
            return res.send({ error })
        }
        res.send({ results })
    })
})

app.get("/script", cors(), (req, res) => {
    if (!req.query.firstClass || !req.query.economy || !req.query.children || !req.query.hours) {
        return res.send({
            error: "You must provide a value for every field..."
        })
    }

    runScript(req.query.firstClass, req.query.economy, req.query.children, req.query.hours, (error, results) => {
        if (error) {
            return res.send({ error })
        }
        res.send({ results })
    })
})

app.get("/testing", (req, res) => {
    return res.send({ test: "This is a test" })
})

app.listen(3001, () => {
    console.log("App is up on port 3001")
})