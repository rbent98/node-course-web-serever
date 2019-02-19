const express = require("express");
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req,res)=> {

    //res.send('<h1> Hello Express! <h1>');

    res.send({
        name: 'richard',
        likes: [
            'Programming',
            'Football'
        ]
    })
});

app.get('/about', (req,res)=> {

    res.render('about.hbs',{
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear()
    });

});

app.get('/home', (req,res)=> {

    res.render('home.hbs',{
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear()
    });

});

app.get('/bad', (req,res)=> {

    res.send({
        errorMessage: 'this is an error message'
    });

});

app.listen(3000);