require('dotenv').config();
const express = require('express'),
      massive = require('massive'),
      session = require('express-session'),
      authCtrl = require('./controllers/authController'),
      postCtrl = require('./controllers/postController'),
      {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env,
      app = express();

const PORT = SERVER_PORT;

app.use(express.json());

app.use(session({
   resave: false,
   saveUninitialized: true,
   secret: SESSION_SECRET,
   cookie: {maxAge: 1000 * 60 * 60 * 24 * 7}
}));

massive({
   connectionString: CONNECTION_STRING,
   ssl: {rejectUnauthorized: false}
})
.then(db => {
   app.set('db', db);
   console.log('db connected');
   app.listen(PORT, () => console.log(`server running on ${PORT}`));
})

//authorization endpoints
app.post('/auth/register', authCtrl.register);
app.post('/auth/login', authCtrl.login);
app.get('/auth/logout', authCtrl.logout);

//post endpoints
app.get('/api/posts', postCtrl.getDashPosts);
app.get('/api/post/:id', postCtrl.getPost);
app.delete('/api/post/:id', postCtrl.deletePost);
app.put('/api/edit/:id', postCtrl.editPost);