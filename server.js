const express = require("express");
const expressGraphQL = require("express-graphql").graphqlHTTP;

const app = express();
app.use(
  "/grapql",
  expressGraphQL({
    graphiql: true,
  })
);
app.listen(4000, () => {
  console.log("the server is runnning at 4000");
});
