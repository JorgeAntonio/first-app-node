const express = require("express");
const app = express();
const path = require('path');

// SETTINGS
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

// MIDDLEWARES

//ROUTES
app.use(require('./routes/index'));

//STATIC FILES
app.use(express.static(path.join(__dirname, 'public')));

// LISTENING THE SERVER
app.listen(app.get('port'), () => {
    console.log("server on port", app.get('port'));
});