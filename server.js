const express = require('express')
const app = express()
const port = process.env.PORT || 8000

app.use(express.static(__dirname + '/public')); // This line.

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('pages/home');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
