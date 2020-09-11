// Requirements
const express = require('express');
const morgan = require('morgan');
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());


// Routes

// Specific Classes
app.use('/api/offensive', require('./routes/offensive'));
app.use('/api/support', require('./routes/support'));
app.use('/api/deffensive', require('./routes/deffensive'));

// Download
app.use('/api/download', require('./routes/download'));

// Server Starting
app.listen(app.get('port'), () => {
    console.log(`Listening On The Port: ${app.get('port')}`);
})