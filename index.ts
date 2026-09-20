import mongoose from 'mongoose';
import express from 'express';

const app = express()
mongoose.connect('mongodb://localhost:27017/todo-app')
       .then(() => console.log('connected to db'))
       .catch(e => console.log('cant connect to db'+ e )) 

app.get("/", (req, res) => {
	console.log('something')
      })

app.listen(3000)

