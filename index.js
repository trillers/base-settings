module.exports = {
    env: {
        name: 'qa'
    },

    logging: {
        reloadSecs: 0, //INFO: set 0 could let nodeunit tests which use log4js exit properly
        level: 'ERROR'
    },

    redis: {
        mode: 'single',
        host: '127.0.0.1',
        port: 6379,
        auth: 'trillers'
    },

    mongo: {
        host: "127.0.0.1",
        port: 27017,
        db: "wenode-qa",
        username: 'wenode-qa',
        password: 'wenode-qa'
    },

    rabbitmq: {
        host: "114.215.91.211",
        port: 5672,
        vhost: 'wenode_qa',
        username: 'wenode',
        password: 'wen0dep@ssw0rd!'
    }
};
