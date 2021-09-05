const express = require('express');
const app = express();

app.listen(3000);

app.set('view engine', 'ejs');

app.get('/', (req, res, next) => {
    res.redirect('/home');
    next()
  });

  app.get('/home',(req,res) => {
      res.redirect('home', {title: "Home"});
  });






app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
  });