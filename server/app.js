require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const blogList = require('./router/blogRouter');

// Express App
const app = express();


// Middleware 
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})
app.use(cors());


mongoose.connect(process.env.DB_URL)
.then(() => {
    app.listen(process.env.PORT, () => {
    console.log('Connection Established');
    console.log('Listening to port', process.env.PORT);
})
}).catch((error) => {
    console.log(error);
})



app.use('/List', blogList);