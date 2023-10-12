module.exports = {
  servers: {
    one: {
      host: 'ip.add.re.ss',
      username: 'root',
    }
  },

  app: {
    name: 'PrismaReproduction',
    path: '../',

    servers: {
      one: {},
    },
    buildOptions: {
      serverOnly: true,
    },
    env: {
      ROOT_URL: 'http://ip.add.re.ss',
      MONGO_URL: 'mongodb://mongodb/meteor',
      MONGO_OPLOG_URL: 'mongodb://mongodb/local',
    },

    docker: {
      image: 'zodern/meteor',
      buildInstructions: [
        'USER root',
        'RUN apt-get update && apt-get install -y python3',
        'USER app'
      ],
    },

    enableUploadProgressBar: true
  },

  mongo: {
    version: '4.4.12',
    servers: {
      one: {}
    }
  },
};
