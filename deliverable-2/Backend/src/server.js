const app = require('./app');

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log('Server is up and running on port 5000');
});
