const {addUser, getUsers, updateUser, deleteUser, getUser} = require("./repository");
const express = require('express');

const router = express.Router();

router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

router.get('/', async (req, res) => {
    let users = await getUsers(req.query.search)
    res.send((users))
});

router.get('/:id', async (req, res) => {
    let userId = req.params.id
    let user = await getUser(userId)
    if (user) {
        res.send((user))
    } else {
        res.send(404)
    }
});

router.post('/', async (req, res) => {
    let {name, banned} = req.body
    await addUser(name, banned)
    res.send(({postUser: 'success'}))
});

router.delete('/:id', async (req, res) => {
    let userId = req.params.id
    let users = await deleteUser(userId)
    if (users) {
        res.send({deleteUser: 'success'})
    } else {
        res.send(404)
    }
})

router.put('/', async (req, res) => {
    let {userId, name, banned} = req.body
    await updateUser(userId, name, banned)
    res.send(({updateUser: 'success'}))
});

module.exports = router;