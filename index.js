const { ApolloServer } = require("apollo-server");
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const { typeDefs } = require("./schemaGQL.js");
const { resolvers } = require("./resolver.js");

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on("connected", () => {
    console.log("connected to mongodb")
});

mongoose.connection.on("error", (err) => {
    console.log("error connecting", err)
});

const context = ({ req }) => {
    const { authorization } = req.headers;
    if (authorization) {
        const { userId } = jwt.verify(authorization, process.env.SECRET)
        return { userId }
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context
});

server.listen().then(({ url }) => {
    console.log(`server ready at ${url}`);
});
