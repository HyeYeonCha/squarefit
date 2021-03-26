const mongoose = require('mongoose');

module.exports = () => {
  const connect = async () => {
    if (process.env.NODE_ENV === 'production') {
      mongoose.set('debug', true);
    }
    try {
      await mongoose.connect(process.env.MONGODB_URL, {
        dbName: 'squarefit',
        useUnifiedTopology: true,
        useNewUrlParser: true,
      });
    } catch (err) {
      console.error(err);
    }
  };
  connect();
};