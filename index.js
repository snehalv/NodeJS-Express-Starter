const express = require('express');
const app = express();

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

// For Initial App
// app.use((req, res, next) => {
//   res.status(200).json({
//     message: 'It Works!'
//   });
// });
module.exports = app;


// const { resolve } = require('path');
// const port = 3010;
// app.use(express.static('static'));
// app.get('/', (req, res) => {
//   res.sendFile(resolve(__dirname, 'pages/index.html'));
// });
// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });
