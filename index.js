const express = require('express')
const cors = require('cors')
const users = require('./usersRouters')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

//const uri = 'mongodb+srv://Evgeni:nzbcLAw3Uh3R6o1o@cluster0.cd2hkjr.mongodb.net/?retryWrites=true&w=majority'
const uri = process.env.MONGODB_URI

try {
    mongoose.connect(uri,
        {useNewUrlParser: true, useUnifiedTopology: true},
        () => console.log("Mongoose is connected")
    );

} catch (e) {
    console.log("could not connect");
}

/*main().catch(err => console.log(err));
async function main() {
    await mongoose.connect(process.env.MONGODB_URI);
}*/

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

app.listen(process.env.PORT, () => {
    console.log(`App listening on port ${process.env.PORT}`)
})
