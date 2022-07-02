const fs = require("fs");
const {v1} = require('uuid');


const getUsers = () => {
    return new Promise((resolve, reject) => {
        fs.readFile("users.json", function (err, buf) {
            if (err) {
                reject(err)
            } else {
                resolve(JSON.parse(buf.toString()))
            }
        })
    })
}

const addUser = async (name) => {
    let users = await getUsers()
    users.push({id: v1(), name: name, banned: false})

    return new Promise((resolve, reject) => {
        fs.writeFile("users.json", JSON.stringify(users), (err) => {
            if (err) {
                reject(err)
            } else {
                resolve()
            }
        });
    })
}

const isBanned = (userId) => {
    users.map(u => u.id === userId ? u.banned = !u.banned : u)
}

module.exports = {
    addUser,
    getUsers,
    isBanned,
}