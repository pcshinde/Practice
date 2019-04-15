module.exports = {
  mongoURI: 'mongodb+srv://prasad:prasad123@first-fxezs.mongodb.net/test?retryWrites=true',
  mongoCFG: {
    useNewUrlParser: true,
    ssl: true,
    replicaSet: 'first-shard-00-02',
    authSource: 'admin',
    retryWrites: true
  }
};
