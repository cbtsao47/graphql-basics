<!-- GraphQL root types -->

1. Query
2. Mutation
3. Subscribtion

Basic Example:
type Query{ <!--root type-->
info: String! <!--root field-->
}
Complicated Example:
type Query{
users:[User!]!
user(id: ID!): User
}
type Mutation{
createUser(name:String!): User!
}
type User{
id:ID!
name: String!
}

Every field inside the basic root types (query,mutation,subscribtion) is called a root field

! and [] are called type modifiers

Resolvers

Link: {
id: parent => parent.id,
description: parent => parent.description,
url: parent => parent.url
}

- the parent (sometimes root) is the result of the previous resolver execution level
