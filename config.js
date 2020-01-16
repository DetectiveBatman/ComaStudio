const chalk = require('chalk');
const mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'ComaStudio',
  multipleStatements: true
});

function handleDisconnect(connection){
  connection.on('error', function(err){
    if(!err.fatal)
    {
      return;
    }
    if(err.code !== 'PROTOCOL_CONNECTION_LOST')
    {
      throw err;
    }
    console.log('\nRe-connecting lost connection: ' +err.stack);

    connection = mysql.createConnection(connection.config);
    handleDisconnect(connection);
    connection.connect();
  });
}

handleDisconnect(connection);




/** db.connect(function(err) {
  if (err) {
    console.error(chalk.red('error connecting to database [ComaStudio]: ') + chalk.green(err.stack));
    return;
  }
}); **/

module.exports = {
  db: connection
}
