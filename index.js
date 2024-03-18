// Import required modules
const { ApolloServer } = require("apollo-server");
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const { typeDefs } = require("./schemaGQL.js");
const { resolvers } = require("./resolver.js");


dotenv.config();


mongoose.connect(process.env.MONGO_URL, {
    
});


mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
    console.error("Error connecting to MongoDB:", err);
});

const context = ({ req }) => {
    const { authorization } = req.headers;
    if (authorization) {
        const { userId } = jwt.verify(authorization, process.env.SECRET);
        return { userId };
    }
};


const server = new ApolloServer({
    typeDefs,
    resolvers,
    context
});


server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
});
