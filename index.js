module.exports = {
    env: {
        name: 'nci'
    },

    logging: {
        reloadSecs: 0, //INFO: set 0 could let nodeunit tests which use log4js exit properly
        level: 'DEBUG'
    },

    redis: {
        mode: 'single',
        host: '127.0.0.1',
        port: 6379,
        auth: 'trillers'
    },

    mongo: {
        host: "114.215.91.211",
        port: 27017,
        db: "note-ci",
        username: 'note-ci',
        password: 'note-ci'
    },

    rabbitmq: {
        host: "114.215.91.211",
        port: 5672,
        vhost: 'wenode_ci',
        username: 'wenode',
        password: 'wen0dep@ssw0rd!'
    }
};
