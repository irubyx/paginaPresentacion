const { rejects } = require('assert');
const { exec } = require('child_process');
const { stdout } = require("process")

const runScript = (firstClass, economy, children, hours) => {
    return new Promise((resolve, reject) => {
        let test
        const script = exec(`/usr/bin/bash /var/www/html/pagina/src/jobRun.sh ${firstClass} ${economy} ${children} ${hours}`, (error, stdout, stderr) => {
            test = stdout.split("'")
            test = test[test.length - 2]
            test = test.replace("get -n", "logs --jobrun")
            
            setTimeout(() => {
                const script = exec(`test`,
                    (error, stdout, stderr) => {
                        test = stdout
                        test ? resolve(test) : reject("Script execution failed")
                    })
            }, 15000)
        })
    })
}

module.exports = runScript