const http = require('http')
const server= http.createServer((req,res) =>
{
    if(req.url === '/')
    {
        res.end('welcome to our homepage')
    }
    else if(req.url === '/about')
    {
        res.end('welcome to our about page')
    }
    else {res.end(`
        <h1> oops! </h1>
        <p>we cant seem </p>
        <a href="/">back home</a>
        `)
}

    // console.log(req)
    // res.write('welcome to our home page')
    // res.end()
}
)
server.listen(9090)