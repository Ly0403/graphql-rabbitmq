import { buildSchema } from "graphql";

export const schema = buildSchema(`
type Query {
    getUser: [User]
    getUserByName(name: String): User
}

type Mutation{
    addUser(user: UserInput): User
    updateUser(id: String, user: UserInput): UpdateResponse
    deleteUser(name: String): UpdateResponse
} 

type UpdateResponse{
    result: String
}

input UserInput{
    name: String
    email: String
    password: String
}  

type User{
    _id: String
    name: String
    email: String
    password: String
} 
`);
