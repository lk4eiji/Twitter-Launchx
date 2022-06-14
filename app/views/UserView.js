const UserService = require('./../../app/services/UserService')

class UserView{
    static createUser(payload){
        if(payload === null){
            return {error: 'payload no existe'}
        }
        else if(payload.username === null || payload.name === null || payload.id === null){
            return {error:'necesitan tener un valor valido'}
        }
    }
}

module.exports = UserView