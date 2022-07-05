const express = require('express')
const cors = require('cors')
const users = require('./usersRouters')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/incubator');
}

let port = process.env.PORT || 5000
const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use('/users', users);

app.get('/tasks', async (req, res) => {
    res.send('tasks')
});

app.use((req, res) => {
    res.send(404);
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
