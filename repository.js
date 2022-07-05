const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
    name: String,
    banned: Boolean,
});

const User = mongoose.model('users', usersSchema);

const getUsers = (search) => {
    if (!search) {
        return User.find()
    } else {
        return User.find({name: new RegExp(search)})
    }
}

const getUser = (id) => {
    return User.find({_id: id})
}

const deleteUser = (id) => {
    return User.deleteOne({_id: id})
}

const addUser = (name, banned) => {
    const user = new User({name, banned})
    return user.save();
}

const updateUser = (userId, name, banned) => {
    return User.update({_id: userId}, {name: name, banned: banned},)
}

module.exports = {
    addUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser
}