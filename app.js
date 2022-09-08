import express from 'express';
import mongoose from 'mongoose';
import dotenv  from 'dotenv'; 
import routerblog from './routes/blog-routes.js';
import routeruser from './routes/user-routes.js';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
dotenv.config();

const mongourl = process.env.MONGO_URL;


const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

// code


const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/user',routeruser);
app.use('/api/blog',routerblog);

// Deployment Code

app.use(express.static(path.join(__dirname, "/frontend/build")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname.js, '/frontend/build', 'index.html'));
});

mongoose.connect(mongourl,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    app.listen(process.env.PORT || 5000, () => {
        console.log('Connected and Listening on Port 5000');
    })
})
.catch((err) => console.log(err));
// WqeyYXLHfVjHoGOJ

