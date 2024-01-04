
    
    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'WS',
      database: 'user',
    });

    connection.connect((err) => {
      if (err) {
        console.error('Error connecting to MariaDB:', err);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Error connecting to MariaDB' }));
        return;
      }

      console.log('Connected to MariaDB!');
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Connection established between frontend and database!' }));

      connection.end((err) => {
        if (err) {
          console.error('Error closing MariaDB connection:', err);
        }
        console.log('Disconnected from MariaDB!');
      });
    });
  