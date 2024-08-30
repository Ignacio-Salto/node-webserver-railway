require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express()
const port = process.env.PORT;

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//Servir contenido estatisco (hacer publico el html)
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Ignacio Salto',
        titulo: 'Curso de Node',
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Ignacio Salto',
        titulo: 'Curso de Node',
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Ignacio Salto',
        titulo: 'Curso de Node',
    });
});

//En caso de que alguien quiera acceder al http por otra ruta y le lanzamos un error:
app.get('*', (req, res) => {
    res.sendFile('404 / page not found')
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});