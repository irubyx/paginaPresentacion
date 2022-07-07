const path = require("path")
const express = require("express")
const hbs = require("hbs")

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

app.get("/about", (req, res) => {
    res.render("about", {
        title: "About us",
        name: "Sebastian Fripp & Juan Ignacio Prina"
    })
})

const { exec } = require('child_process');
const { stdout } = require("process")

app.get("/script", (req, res) => {
    let resu = ""
    const script = exec(`/usr/bin/bash /var/www/html/pagina/src/jobRun.sh ${req.query.val1} ${req.query.val2} ${req.query.val3} ${req.query.val4}`,
    (error, stdout, stderr) => {
        if (error !== null) {
            console.log(`exec error: ${error}`);
            console.log(stderr);
        }
        resu = stdout
    });

    res.send("testing")
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