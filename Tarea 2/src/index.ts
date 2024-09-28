import express from 'express';
import mongoose from 'mongoose';
import {config} from 'dotenv'


config();
import routesIndex from './routes/index';
const app = express();
const port = process.env.PORT || 3000;

const dbURL = process.env.DB_URL;
console.log(dbURL);


mongoose.connect(dbURL as string).then(res =>{
    app.use(routesIndex);
    console.log("Ya se conecto a db")
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
}).catch(err => console.log(err));


