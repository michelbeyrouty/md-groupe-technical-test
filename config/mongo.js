const mongoose = require('mongoose');

module.exports = () => {

  const paramethers = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  };

  mongoose.set('useFindAndModify', false);
  mongoose.connect(process.env.DB_CONNECTION, paramethers , () => {
    console.log('Connected to DB');
  });

};
