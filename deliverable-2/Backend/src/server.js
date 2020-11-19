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

// Database
const attractionSchema = mongoose.Schema({
  name: {
    type: String,
  },
  longitude: {
    type: Number,
  },
  latitude: {
    type: Number,
  },
  description: {
    type: String,
  },
});

const Attraction = mongoose.model('Attraction', attractionSchema);

const testAttraction = new Attraction({
  name: 'High Park',
  longitude: 1.1111111,
  latitude: 1.1111111,
  description: 'Welcome to High Park',
});

testAttraction
  .save()
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log('Server is up and running on port 5000');
});
