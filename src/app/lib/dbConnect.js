//step-1 writing all functionality
//===========connect mongodb ===============
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.URI;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
//Connect mongodb with next.js

//I will work all backend & functionality
//The collection comes from mongodb
export const connect = (collection) => {
  //database name
  const database = process.env.BD_NAME;
  // create dynamic collection
  return client.db(database).collection(collection);
};
