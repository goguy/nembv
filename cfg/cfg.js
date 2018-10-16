module.exports = {
    db: {
      //url: 'mongodb://cluster0-shard-00-00-dwwl8.gcp.mongodb.net:27017,cluster0-shard-00-01-dwwl8.gcp.mongodb.net:27017,cluster0-shard-00-02-dwwl8.gcp.mongodb.net:27017/test?replicaSet=Cluster0-shard-0',    
      // url : "mongodb://xxx.com:27170/xxx"
       url : 'mongodb+srv://nembv:nembv@cluster0-dwwl8.gcp.mongodb.net/nembv' // 3.6이상
    },
    web: {
      host: 'localhost:3000',
      secret_key: 'yullinNembv',
      cors: true
    }
  };