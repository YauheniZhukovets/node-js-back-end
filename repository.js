let users = [
    {id: 1, name: "Sasha", banned: true},
    {id: 2, name: "Artem", banned: false}
]

const getUsers = () => {
    return users
}

const addUser = (name) => {
    users.push({id: 1, name: name, banned: false})
}

module.exports = {
    addUser,
    getUsers,
}