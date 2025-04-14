module.exports = {
  apps: [
    {
      name: 'user-http',
      script: 'dist/main.js',
      cwd: './',
      exec_mode: 'fork',
      instances: 1,
      env: {
        NODE_ENV: 'production',
        APP_PORT: '8080',
      },
    },
    {
      name: 'user-rmq',
      script: 'dist/main.microservice.js',
      cwd: './',
      exec_mode: 'fork',
      instances: 1,
      env: {
        NODE_ENV: 'production',
        RABBITMQ_URL: 'amqp://guest:guest@localhost:5672',
      },
    },
  ],
};
