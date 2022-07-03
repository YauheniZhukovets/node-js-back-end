const {v1} = require('uuid');
const {readJsonFromFile, writeJsonToFile} = require('./fs-utils');


const getUsers = () => {
    return readJsonFromFile("users.json")
}

const addUser = async (name) => {
    let users = await getUsers()
    users.push({id: v1(), name: name, banned: false})

    return writeJsonToFile("users.json", users)
}

const isBanned = (userId) => {
    users.map(u => u.id === userId ? u.banned = !u.banned : u)
}

module.exports = {
    addUser,
    getUsers,
    isBanned,
}