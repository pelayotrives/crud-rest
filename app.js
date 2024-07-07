const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('Server is running on port 5000');
});

app.get('/api/products', (req, res) => {
  res.json([
    {name: 'Macbook Air 13"', price: 1099},
    {name: 'Macbook Air 15"', price: 1599},
    {name: 'Macbook Air 13"', price: 1699},
    {name: 'Macbook Pro 15"', price: 2099},
    {name: 'iMac', price: 1499},
  ])
})