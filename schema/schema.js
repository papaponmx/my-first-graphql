const graphql = require('graphql');
const _ = require('lodash');
const {
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
} = require('graphql');;

const users = [
  {
    id: '23',
    firstName: 'Bill',
    lastName: 'Clinton',
    age: 47,
  },
  {
    id: '24',
    firstName: 'Tim',
    lastName: 'Burton',
    age: 20,
  },
]

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    age: { type: GraphQLInt }
  },
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
        resolve(parentValue, args) {
          return _.find(users, { id: args.id });
        }
      }
    }
});


module.exports = new GraphQLSchema({
  query: RootQuery,
});
