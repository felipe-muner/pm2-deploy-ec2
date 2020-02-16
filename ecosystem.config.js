module.exports = {
  apps : [{
    name: 'test app node aws-ec2',
    script: 'bin/www',

    // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'ubuntu',
      host : '3.92.134.169',
      ref  : 'origin/master',
      repo : 'git@github.com:felipe-muner/pm2-deploy-ec2.git',
      path : '/home/ubuntu',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
