import express from 'express';
import mongoose from 'mongoose';
import routerblog from './routes/blog-routes.js';
import routeruser from './routes/user-routes.js';
import cors from 'cors';



const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/user',routeruser);
app.use('/api/blog',routerblog);

// Deployment Code

app.use(express.static(path.join(__dirname, "/frontend/build")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/frontend/build', 'index.html'));
});

mongoose.connect(process.env.MONGO_URL)
.then(() => {
    app.listen(process.env.PORT || 5000, () => {
        console.log('Connected and Listening on Port 5000');
    })
})
.catch((err) => console.log(err));
// WqeyYXLHfVjHoGOJ