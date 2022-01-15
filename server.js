
const app = require('./config/app');
const initializMongo = require('./config/mongo');

initializMongo();

app.listen(process.env.PORT, () => {
  console.log(`Running on port ${process.env.PORT}`);
});
