const User = require('./../models/User')

class UserService{
    static create(id, username, name){
        return new User(id, username, name, "Sin Bio")
    }

    static getInfo(info){
        return info = [info.id,info.username,info.name,info.bio]
    }

    static updateUserUsername(user,updateUsername){
        return user.username = updateUsername
    }

    static getAllUsernames(usernamesList){
        return usernamesList = ["lk4eiji1","lk4eiji2","lk4eiji3"]
    }
}

module.exports = UserService