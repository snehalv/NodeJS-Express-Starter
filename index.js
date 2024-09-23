const express = require('express');
// const { resolve } = require('path');
const app = express();
app.use((req, res, next) => {
  res.status(200).json({
    message: 'It Works!'
  });
});
module.exports = app;

// const port = 3010;

// app.use(express.static('static'));

// app.get('/', (req, res) => {
//   res.sendFile(resolve(__dirname, 'pages/index.html'));
// });

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });
