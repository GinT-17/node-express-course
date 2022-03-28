const os =  require('os')

//info about the current user
console.log(os.userInfo())

//methos returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS)