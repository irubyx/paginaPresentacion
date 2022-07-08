const path = require("path")
const express = require("express")
const hbs = require("hbs")

const runScript = require("./utils/runScript")

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

app.get("", (req, res) => {
    res.render("index", {
        title: "Watson Airlines",
        name: "Sebastian Fripp & Juan Ignacio Prina"
    })
})

app.get("/flights", (req, res) => {
    res.render("flights", {
        title: "Flight Status",
        name: "Sebastian Fripp & Juan Ignacio Prina"
    })
})

app.get("/food", (req, res) => {
    res.render("food", {
        title: "Food Service",
        name: "Sebastian Fripp & Juan Ignacio Prina"
    })
})

app.get("/about", (req, res) => {
    res.render("about", {
        title: "About us",
        name: "Sebastian Fripp & Juan Ignacio Prina"
    })
})

const { exec } = require('child_process');
const { stdout } = require("process")

app.get("/script", (req, res) => {
    if (!req.query.val1 || !req.query.val2 || !req.query.val3 || !req.query.val4){
        return res.send({
            error: "You must provide a value for every field..."
        })
    }
    
    runScript(req.query.val1,req.query.val2,req.query.val3,req.query.val4, (error, {response} = {}) => {
        if (error) {
            return res.send({ error })
        }

        res.send({response})
    })
})

app.get("*", (req, res) => {
    res.render("404", {
        title: "404",
        name: "Sebastian Fripp & Juan Ignacio Prina",
        errorMessage: "Page not found"
    })
})

app.listen(3000, () => {
    console.log("App is up on port 3000")
})