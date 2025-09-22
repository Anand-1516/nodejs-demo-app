const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
<<<<<<< HEAD
  res.send('Hello this is my first task for CI/CD — updated code!');
=======
  res.send('Hello world CI/CD — updated code!');
>>>>>>> 16c0256 (updated one)
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});

