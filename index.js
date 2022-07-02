const http = require('http')
const {usersController} = require('./usersController')

const port = 5000


let cors = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS,PUT,POST,PATCH,DELETE,GET');
    res.setHeader('Access-Control-Allow-Headers', '*');
    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return true
    }
    return false
}

const server = http.createServer((req, res) => {
    if (cors(req, res)) return

    switch (req.url) {
        case '/users':
            usersController(req, res)
            break
        case '/lessons' :
            res.write('tasks')
            break
        default:
            res.write('PAGE NOT FOUND!!!!')
    }
})

server.listen(`${port}`)