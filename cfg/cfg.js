module.exports = {
    db: {
      //url: 'mongodb://cluster0-shard-00-00-dwwl8.gcp.mongodb.net:27017,cluster0-shard-00-01-dwwl8.gcp.mongodb.net:27017,cluster0-shard-00-02-dwwl8.gcp.mongodb.net:27017/test?replicaSet=Cluster0-shard-0',    
      // url : "mongodb://xxx.com:27170/xxx"
       url : 'mongodb+srv://admin:admin@cluster0-dwwl8.gcp.mongodb.net/nembv?retryWrites=true' // 3.6이상
    },
    web: {
      host: 'localhost:3001',
      secret_key: 'yullinNembv',
      cors: true
    }
  };