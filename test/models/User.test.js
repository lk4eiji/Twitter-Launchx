const User = require('./../../app/models/User')

describe("Unit Test for User class", () =>{

    test('Create an User object', () =>{
        const user = new User(1,"lk4eiji","Abraham","Bio")

        expect(user.id).toBe(1)
        expect(user.username).toBe("lk4eiji")
        expect(user.name).toBe("Abraham")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).not.toBe()
        expect(user.lastUpdated).not.toBe()
    })

    test('Add getters', () =>{
        const user = new User(1,"lk4eiji","Abraham","Bio")
        expect(user.getUsername).toBe("lk4eiji")
        expect(user.getBio).toBe("Bio")
        expect(user.getDateCreated).not.toBeUndefined()
        expect(user.getLastUpdated).not.toBeUndefined()
    })

    test('Add setters',() =>{
        const user = new User(1,"lk4eiji","Abraham","Bio")
        user.setUsername = "lk4eiji"
        expect(user.username).toBe("lk4eiji")

        user.setBio = "New bio"
        expect(user.bio).toBe("New bio")
    })
})