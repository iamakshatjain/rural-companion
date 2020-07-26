module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        uri:
          "mongodb://admin_rc:admin_rc@gramin-mitra-shard-00-00.tfksc.mongodb.net:27017,gramin-mitra-shard-00-01.tfksc.mongodb.net:27017,gramin-mitra-shard-00-02.tfksc.mongodb.net:27017/gramin-mitra?ssl=true&replicaSet=atlas-ks6zw1-shard-0&authSource=admin&retryWrites=true&w=majority",
      },
      options: {
        ssl: true,
      },
    },
  },
});
