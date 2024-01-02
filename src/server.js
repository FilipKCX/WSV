import http from 'http';
import { parse as parseUrl } from 'url';
import mysql from 'mysql';

const server = http.createServer((req, res) => {
  const { pathname } = parseUrl(req.url);

  if (pathname === '/createAccount' && req.method === 'POST') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString(); // Accumulate incoming data
    });

    req.on('end', () => {
      const requestData = JSON.parse(body);

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

        const { email, password } = requestData;

        const sql = 'INSERT INTO account (email, password) VALUES (?, ?)';
        connection.query(sql, [email, password], (err, result) => {
          if (err) {
            console.error('Error creating account:', err);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Error creating account' }));
            return;
          }
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ message: 'Account created successfully' }));
        });
      });
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Enndpoint not found' }));
  }
});

const PORT = 3306; // Replace with your desired port
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});