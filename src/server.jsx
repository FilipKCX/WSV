const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost', // or your database host
  user: 'your_username',
  password: 'your_password',
  database: 'your_database_name',
});

// Connect to MariaDB
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MariaDB:', err);
    return;
  }
  console.log('Connected to MariaDB!');
});