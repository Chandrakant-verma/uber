const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const connectToDb = require('./db/db');
const userRoutes = require('./routes/user_router');
const cookieParser = require('cookie-parser');
const captainRouter = require('./routes/captain_router');

connectToDb();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/users',userRoutes);
app.use('/captains', captainRouter);
app.get('/', (req, res) => {
      res.send('hello world');
})



module.exports = app;