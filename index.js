module.exports = {
    env: {
        name: 'dev'
    },

    logging: {
        reloadSecs: 0, //INFO: set 0 could let nodeunit tests which use log4js exit properly
        level: 'DEBUG'
    },

    redis: {
        mode: 'single',
        host: '127.0.0.1',
        port: 6379,
        auth: ''
    },

    mongo: {
        host: "127.0.0.1",
        port: 27017,
        db: "wenode",
        username: 'wenode',
        password: 'wenode'
    },

    rabbitmq: {
        host: "114.215.91.211",
        port: 5672,
        vhost: 'wenode_dev',
        username: 'wenode',
        password: 'wen0dep@ssw0rd!'
    }
};
