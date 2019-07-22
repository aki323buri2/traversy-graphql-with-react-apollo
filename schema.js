const axios = require('axios');
const { 
  GraphQLObjectType, 
  GraphQLInt, 
  GraphQLString, 
  GraphQLBoolean, 
  GraphQLList, 
  GraphQLSchema, 
} = require('graphql');

 // Launch Type
 const LaunchType = new GraphQLObjectType({
   name: 'Launch', 
   fields: () => ({
    flight_number: { type: GraphQLInt },  // 1,
    mission_name: { type: GraphQLString },  // "FalconSat",
    launch_year: { type: GraphQLString },  // "2006",
    launch_date_utc: { type: GraphQLString },  // "2006-03-24T22:30:00.000Z",
    launch_date_local: { type: GraphQLString },  // "2006-03-25T10:30:00+12:00",
    launch_success: { type: GraphQLBoolean },  // true,
    rocket: { type: RocketType }, 
   })
 });

 // Rocket Type
 const RocketType = new GraphQLObjectType({
   name: 'Rockt', 
   fields: () => ({
     rocket_id: { type: GraphQLString }, // "falcon9",
     rocket_name: { type: GraphQLString }, // "Falcon 9",
     rocket_type: { type: GraphQLString }, // "FT",
   }), 
 });

 // Root Quety
 const RootQuery = new GraphQLObjectType({
   name: 'RootQyeryType', 
   fields: {
     launches: {
       type: new GraphQLList(LaunchType), 
       resolve(parent, args) {
         return axios
          .get('https://api.spacexdata.com/v3/launches')
          .then(res => res.data);
       }, 
     }, 
     launch: {
      type: LaunchType, 
      args: {
        flight_number: { type: GraphQLInt }, 
      }, 
      resolve(parent, args) {
        return axios.get(`https://api.spacexdata.com/v3/launches/${args.flight_number}`)
         .then(res => res.data);
      }, 
    }, 
     rockets: {
       type: new GraphQLList(RocketType), 
       resolve(parent, args) {
         return axios
          .get('https://api.spacexdata.com/v3/rockets')
          .then(res => res.data);
       }, 
     }, 
     rocket: {
       type: RocketType, 
       args: {
         rocket_id: { type: GraphQLString }, 
       }, 
       resolve(parent, args) {
         return axios
          .get(`https://api.spacexdata.com/v3/rockets/${args.rocket_id}`)
          .then(res => res.data);
       }, 
     }, 
   }, 
 });

 module.exports = new GraphQLSchema({
   query: RootQuery, 
 })