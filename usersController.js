const {addUser, getUsers, isBanned} = require("./repository");

usersController = async (req, res) => {
    if (req.method === "POST") {
        await addUser('Lesha')
        res.write(JSON.stringify({success: true}))
        res.end()
    } else if (req.method === "PUT") {
        let {userId} = req.body
        isBanned(userId)
        res.write(JSON.stringify({success: true}))
        res.end()
    } else {
        let users = await getUsers()
        res.write(JSON.stringify(users))
        res.end()
    }
}

module.exports = {
    usersController
}