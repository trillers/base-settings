module.exports = {
    env: {
        name: 'prd'
    },

    logging: {
        reloadSecs: 0, //INFO: set 0 could let nodeunit tests which use log4js exit properly
        level: 'INFO'
    },

    redis: {
        mode: 'single',
        host: '127.0.0.1',
        port: 6379,
        auth: 'trillers',
        sentinel: {
            hosts: [{host: '127.0.0.1', port: 26379}],
            masterName: 'mymaster'
        }
    },

    mongo: {
        host: "114.215.91.211",
        port: 27017,
        db: "wenode",
        username: 'wenode',
        password: 'wenode'
    },

    rabbitmq: {
        host: "114.215.91.211",
        username: 'admin',
        password: 'p@ssw0rd!',
        prefix: 'prd:'
    }
};
