import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import session from 'express-session';
import dotenv from 'dotenv'


dotenv.config()


import userRouter from './routes/user.js'

const app = express();

const db = mongoose.connection

app.use(
    session({
      secret: 'key123',
      resave: false,
      saveUninitialized: true, 
      cookie: { maxAge: 1500000 },
    })
  );

app.use(cors({origin:true,credentials:true}))
app.use(express.json())

app.use('/',userRouter)



try {
    mongoose.connect(process.env.MONGO_URI)
    db.on('error',console.error.bind(console,'connection error'))
    db.once('open', function () {
        console.log('Database Connected successfully');
    })
}catch(err){
    console.log(err);
}


app.listen(5000, () => {
  console.log('listening on port 5000');
});
