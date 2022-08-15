const { execSync } = require('child_process');

const runScript = (firstClass, economy, children, hours, callback) => {
    let test
    const script = execSync(`/usr/bin/bash /var/www/html/pagina/src/jobRun.sh ${firstClass} ${economy} ${children} ${hours}`)
    test = script.toString().split("'")
    test = test[test.length - 2]
    test = test.replace("get -n", "logs --jobrun")

    setTimeout(() => {
        script = execSync(test)
        callback(undefined, script.toString())
    }, 30000)
}

module.exports = runScript