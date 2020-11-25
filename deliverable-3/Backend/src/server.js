const app = require('./app');
const mongoose = require('mongoose');

const keys = require('./config/keys');

mongoose
  .connect(keys.mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  })
  .then((con) => {
    console.log('DB connection successful');
  })
  .catch((err) => {
    console.log(err);
  });

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log('Server is up and running on port 5000');
});
