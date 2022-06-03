const User = require('../../app/models/User')
const UserService = require('./../../app/services/UserService')

describe("Test for Userservice", () => {
    test('1. Create a new user using the UserService', () => {
        const user = UserService.create(1,"lk4eiji","Abraham")
        expect(user.username).toBe("lk4eiji")
        expect(user.name).toBe("Abraham")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })
    test('2. Get all user data in a list', () =>{
        const user = UserService.create(1, "lk4eiji", "Abraham")
        const userInfoInList = UserService.getInfo(user)
        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe("lk4eiji")
        expect(userInfoInList[2]).toBe("Abraham")
        expect(userInfoInList[3]).toBe("Sin Bio")
    })

    test('3. Update username', () => {
        const user = UserService.create(1,"lk4eiji","Abraham")
        UserService.updateUserUsername(user,"lk4eiji")
        expect(user.username).toBe("lk4eiji")
    })

    test('4. Given a list of user give me the list of usernames', () =>{
        const user1 = UserService.create(1, "lk4eiji1","Abraham")
        const user2 = UserService.create(1, "lk4eiji2","Abraham")
        const user3 = UserService.create(1, "lk4eiji3","Abraham")
        const usernames = UserService.getAllUsernames([user1,user2,user3])
        expect(usernames).toContain("lk4eiji1")
        expect(usernames).toContain("lk4eiji2")
        expect(usernames).toContain("lk4eiji3")
    })
})