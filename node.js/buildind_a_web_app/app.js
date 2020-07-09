const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path'); //inbuilt module
const sql = require('mssql');

const app = express();
const port = process.env.PORT || 3000;

const config = {
    user: 'library',
    password: 'Namilyango1998',
    server: 'pslibrary256.database.windows.net', // You can use 'localhost\\instance' to connect to named instance
    database: 'PSLibrary',

    options: {
        encrypt: true
    }
};

sql.connect(config).catch(err => debug(err)); 
app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render(
        'index',
        { 
            nav: ['Books','Authors'], 
            title: 'Library'
        }
    );
});

app.listen(port, function() {
    //debug logs only in debug mode
    //use $env:DEBUG='app' for windows
    debug(`Listening on port ${chalk.green(port)}`);
});