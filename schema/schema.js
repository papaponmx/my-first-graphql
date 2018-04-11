const graphql = require('graphql');
const {
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
} = ;

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt },
  }
});

const RootQuery = new GraphQLObjectType({
  
});
