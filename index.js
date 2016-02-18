module.exports = {
    env: {
        name: 'ci'
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
        db: "wenode-ci",
        username: 'wenode-ci',
        password: 'wenode-ci'
    },

    rabbitmq: {
        host: "114.215.91.211",
        port: 5672,
        vhost: 'wenode_ci',
        username: 'wenode',
        password: 'wen0dep@ssw0rd!'
    }
};
