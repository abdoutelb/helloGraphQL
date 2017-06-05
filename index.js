'use strict'
const {graphql , buildSchema} = require('graphql');

const schema = buildSchema(`
type Query {
    name : String
}


type Schema{
    query : Query
}
`);

const query = `
query myFirstQuery {
    name
}
`;

const resolvers = {
    name : () => "abdou"
}

graphql(schema,query,resolvers)
.then((res) => console.log(res))
.catch((err)=> console.log(err));
