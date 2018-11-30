const express = require('express');
const morgan = require('morgan');
const ejs = require("ejs");
const app = express();
var path = require('path');

//Configuracion
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Rutas 
app.get('/', function(req, res) {
  res.render('index');
});

//Servidor
app.listen(app.get('port'), () => {
    console.log('Server on port ' + app.get('port'));
})