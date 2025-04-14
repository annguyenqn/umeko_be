import { EcosystemConfig } from 'pm2';

const config: EcosystemConfig = {
  apps: [
    {
      name: 'srs-rmq',
      script: 'dist/main.js',
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

export default config;
