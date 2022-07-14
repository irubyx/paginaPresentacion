const { execSync } = require("child_process")

const statusScript = (code, callback) => {
    let test
    const script = execSync(`/usr/bin/bash /var/www/html/pagina/src/statusScript.sh ${code}`)
    test = script.toString().split("'")
    test = test[test.length - 2]
    test = test.replace("get -n", "logs --jobrun")

    setTimeout(() => {
        script = execSync(test)
        callback(undefined, script.toString())
    }, 30000)
}

module.exports = statusScript