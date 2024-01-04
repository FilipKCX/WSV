import http from 'http';
import { parse as parseUrl } from 'url';
import mysql from 'mysql';



const server = http.createServer((req, res) => {
  const { pathname } = parseUrl(req.url);
  console.log(req)
  console.log(pathname)


  if (pathname == "/createAccount" && req.method == 'POST') {
    console.log("hier")
    console.log(body)
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString(); // Accumulate incoming data
    });

    console.log(body)

    req.on('end', () => {
      const requestData = JSON.parse(body);

      
      const connection = mysql.createConnection({
        host: 'localhost',
        port: 3001,
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
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Enndpoint not found' }));
  }
});

const PORT = 3306; // Replace with your desired port
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});