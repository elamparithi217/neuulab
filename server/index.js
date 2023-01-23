import express from 'express';
//import bodyParser from 'body-parser'
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';


const app = express();

app.use('./posts', postRoutes);

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://elamparithi123:elamparithi123@cluster0.e6dna.mongodb.net/?retryWrites=true&w=majority';
const PORT =process.env.PORT || 5000;

mongoose.set('strictQuery',false);

mongoose.connect(CONNECTION_URL,{ useNewUrlParser:  true, useUnifiedTopology: true })
    .then(()=> app.listen(PORT,()=> console.log('Server running on port: ${PORT}')))
    .catch((error)=>console.log(error.message));

//mongoose.set('userFindAndModify',false);
