const { MongoClient, ObjectId } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const database = 'examen';

async function getAllMovies() {
    //Haal met deze functie alle film objecten op uit de databank en geef ze door in een Array.
    const movies = await loadMoviesCollection();
    return await movies.find({}).toArray();
}

async function getMovieById(id) {
    //Haal met deze functie één object op uit de databank en geef dit object door.
    const movies = await loadMoviesCollection();
    return await movies.findOne({id: parseInt(id)});
}

async function addVoteToMovie(id) {
    //Voeg met deze functie een stem (movie.votes) toe aan één object uit de databank 
    //en geef het resultaat van de modifiedCount eigenschap door.
    const movies = await loadMoviesCollection();
    const newVote = await movies.updateOne({_id: new ObjectId(id)}, {
        $inc: {votes: 1}
    });
    return newVote.modifiedCount;
}

async function loadMoviesCollection() {
    //Maak met deze functie een connectie met de databank en geef de juiste collectie terug.
    const client = await MongoClient.connect(connectionURL);
    return client.db(database).collection('movies');
}

//Exporteer hier de functies die je hebt vervolledigd.
module.exports = {
    getAllMovies,
    getMovieById,
    addVoteToMovie
}