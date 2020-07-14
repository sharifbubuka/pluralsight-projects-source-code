var express = require('express');
var chalk = require('chalk');

var app = express();
var bookRouter = express.Router();

const port = process.env.PORT || 3000;

bookRouter.route('/books')
    .get((req, res) => {
        var response = {hello: 'This is my API'};
        res.json(response);
    });
app.use('/api', bookRouter); //routes on localhost:4000/api/books

app.get('/', (req, res) => {
    res.send('Welcome to my Node Api!');
});

app.listen(port, () => {
    console.log(chalk.yellow('Listening on port ' + port));
});