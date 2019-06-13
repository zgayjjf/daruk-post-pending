module.exports = {
  apps: [
    {
      name: 'daruk-test',
      script: './master.js',
      kill_timeout: 10000,
      max_memory_restart: '1024M',
      watch: false,
      env: {
        NODE_ENV: 'prod'
      }
    }
  ]
}
