const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes'); 

//Constants
const PORT = 5000;
const HOST = '0.0.0.0'
const PASSWORD = 'gksals49'
// const DB_NAME = 'TDD'
// mongoose
mongoose.connect(`mongodb+srv://wngud4950:${PASSWORD}@cluster0.jyqc7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
  useNewUrlParser: true
}).then(() => console.log('mongoDB Connected'))
.catch(err => console.log('error', err))
// App
const app = express();
app.use(express.json());

app.use('/api/product', productRoutes);
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// })

app.listen(PORT, HOST);
  console.log(`Running on http://${HOST}: ${PORT}`);