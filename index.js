module.exports = {
    env: {
        name: 'qa'
    },

    logging: {
        reloadSecs: 0, //INFO: set 0 could let nodeunit tests which use log4js exit properly
        level: 'DEBUG'
    },

    redis: {
        mode: 'single',
        host: '123.150.207.18',
        port: 6379,
        auth: 'trillers'
    },

    mongo: {
        host: "114.215.91.211",
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
