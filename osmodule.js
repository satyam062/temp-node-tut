const os = require('os')
const user = os.userInfo()
console.log(user)
console.log(`the system uptime is ${os.uptime()}`)
const curentOS =
{
    name: os.type(),
    release: os.release(),
    memory: os.totalmem(),
    freemem: os.freemem()
}
console.log(curentOS);