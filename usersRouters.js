const {addUser, getUsers, isBanned, deleteUser, getUser} = require("./repository");
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
    res.send(({success: true}))
});

router.delete('/:id',async (req, res) => {
    let userId = req.params.id
    let users = await deleteUser(userId)
    if (users) {
        res.send(204)
    } else {
        res.send(404)
    }
})

router.put('/', async (req, res) => {
    let {userId} = req.body
    await isBanned(userId)
    res.send(({success: true}))
});


module.exports = router;