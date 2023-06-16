/*============================
* Import des modules
*==============================*/
// principaelement express et nos module à nous 
const express = require('express');
const pokedex = require('./pokeList')

/*============================
* Configuration d'express
*==============================*/
// On initialise express
// On peut configurer le port dans une constante
const app = express();
const port = 3000;



app.use(express.static('public'));
// on spécifie le dossier où trouver les vues afin de ne pas avoir à spécifier systématiquement le chemin entier vers une vue
app.set('views', './views');

// On déclare qu'expresse va utiliser le moteur de template EJS
app.set('view engine', 'ejs');



/*============================
* Définitions des routes
*==============================*/
// Les app.get
app.get('/', (req, res) => {
    let i = 0
    res.render('index', {pokedex, i});

})

app.get('/pokemon/:pokemonName', (req, res) => {
    let i = 0
    let pokemonName = req.params.pokemonName
    res.render('pokemon-page', {pokedex, i, pokemonName});
})

/*============================
* Lancement du serveur
*==============================*/
// Le listen
app.listen(port, () => console.log(`Le serveur est lancé sur http://localhost:${port}`));