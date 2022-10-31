const { deleteMovieByid, updateMovieById } = require('../controllers/moviesController');
const Movies = require('../controllers/moviesController');

module.exports = {
    getMovies: (app) =>{
        app.get('/api/filmes', Movies.apiGetAllMovies);
    
    },
    addMovie: (app) => {
        app.post('/api/filmes', Movies.addMovie);
    },

    deleteMovieByid: (app) =>{
        app.delete('/api/filmes/:id', Movies.deleteMovieByid);
    },

    updateMovieById:(app) =>{
        app.put('/api/filmes/:id', Movies.updateMovieById);
    }
    
}