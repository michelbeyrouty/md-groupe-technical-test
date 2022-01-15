
const app = require('./config/app');

app.listen(process.env.PORT, () => {
  console.log(`Running on port ${process.env.PORT}`);
});
