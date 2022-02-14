const {ApolloServer, PubSub} = require('apollo-server');
const gql = require('graphql-tag');
var mongoose = require('mongoose');
require('dotenv').config();
const pubsub = require('pubsub-js')

const resolvers = require('./graphql/resolvers');
const typeDefs = require('./graphql/typeDefs');

const PORT = process.env.PORT || 5000;


const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req,pubsub})
});
mongoose.connect(process.env.MONGO_URI,{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log(process.env.MONGO_URI)
    console.log(resolvers)
    server.listen({port:PORT})
}).then((url)=> {
    console.log(`Server running at ${url}`)
    
});

