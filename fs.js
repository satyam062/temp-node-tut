const fs = require('fs')
// const first = fs.readFileSync('./content/first.txt', 'utf8')
// const second = fs.readFileSync('./content/second.txt')
// fs.writeFileSync('./content/first.txt', "here is  app.js result", { flag: 'a'}) 
fs.readFile('./content/first.txt','utf8' , (err,result) => {
    if(err)
    {
         console.log(err)
    }
    else

    {
        console.log(result)
    }
})