let express = require('express');
let graphqlHTTP = require('express-graphql');
let { buildSchema } = require('graphql');

let schema = buildSchema(`
  type Query {
    hello: String
  }
`);

let root = {
  hello: () => {
    return 'Hello world!';
  },
};

let app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000, () => {console.log('Listening on port 4000.')});
