module.exports = {
  apps : [{
    name: 'ComaStudio',
    script: './main.js',
    cwd: '/root/ComaStudio/',
    instances: 1,
    autorestart: true,
    watch: false
  }]
};
