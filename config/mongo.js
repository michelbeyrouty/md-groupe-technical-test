const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
let mongod = null;

const connectDB = async () => {

  let dbUrl = null;

  const paramethers = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  };

  if (process.env.NODE_ENV === 'test') {
    mongod = await MongoMemoryServer.create();
    dbUrl = mongod.getUri();
  }

  const db_url = dbUrl ? dbUrl: process.env.DB_URL;

  mongoose.set('useFindAndModify', false);
  mongoose.connect(db_url, paramethers , () => {
    console.log('Connected to DB');
  });

};

const disconnectDB = async () => {
  await mongoose.connection.close();
  if (mongod) {
    await mongod.stop();
  }
};


module.exports = {
  connectDB,
  disconnectDB,
};



