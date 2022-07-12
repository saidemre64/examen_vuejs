const express = require('express');
const movieController = require('../controllers/movieController');

const router = express.Router();

router.get('/', async (req, res) => {
    //Deze route geeft alle filmobjecten terug als JSON.
    const movies = await movieController.getAllMovies();
    res.send(movies);
});

router.get('/:id', async(req, res) => {
    //Deze route geeft één filmobject terug als JSON.
    const movies = await movieController.getMovieById(req.params.id);
    res.send(movies);
});

router.put('/', async(req, res) => {
    //Deze route voegt een stem toe aan een filmobject en geeft een JSON object met een "message" eigenschap terug. 
    //Werd het object gewijzigd: message = ‘De stem werd toegevoegd’
    //Werd het object niet gewijzigd: message = ‘Het object werd niet terug gevonden, probeer opnieuw’. 
    const votes = await movieController.addVoteToMovie(req.params.id);
    if(error){
        res.send('Het object werd niet terug gevonden, probeer opnieuw');
    }
    res.send('De stem werd toegevoegd')
})

//Exporteer hier de router
module.exports = router;