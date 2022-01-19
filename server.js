const express = require('express');
require('dotenv').config();
const path = require('path');
const app = express();
const postgresRouter = require('./router/PostgresRouter');

//middlewares...
app.use(express.static(path.join(__dirname, '/public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }))



app.use('/', postgresRouter)








const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`server is running on Port: ${PORT}`);
})