module.exports = {
    apps: [
        {
            name: 'vocab-http',
            script: 'dist/main.js',
            cwd: './',
            exec_mode: 'fork',
            instances: 1,
            interpreter: 'node',
            env: {
                NODE_ENV: 'production',
                APP_PORT: '8081',
            },
        },
        {
            name: 'vocab-rmq',
            script: 'dist/main.microservice.js',
            cwd: './',
            exec_mode: 'fork',
            instances: 1,
            interpreter: 'node',
            env: {
                NODE_ENV: 'production',
                RABBITMQ_URL: 'amqp://guest:guest@localhost:5672',
            },
        },
    ],
};
