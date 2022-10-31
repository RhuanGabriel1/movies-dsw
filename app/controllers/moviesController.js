const res = require('express/lib/response');
const Joi = require('joi');

const Movie = require('../models/moviesModel');

const schema = Joi.object().keys({
    name: Joi.string().required().min(1).max(50),
    director: Joi.string().required().min(1).max(50),
    link: Joi.string().required().min(1).max(150)
});

module.exports = class Movies{
    static async apiGetAllMovies (req, res , next){
        console.log('Controller Movies - get movies');
        try{
            const movies = await Movie.getAllMovies();
            if(!movies){
                res.status(400).json('Não existe filme cadastrado.')
                return;
            }
            // movies.forEach(movie => )
            res.json(movies);
        }catch(error){
            console.log('[getallmovies error] ${error}');
            res.status(500).json({error:error})
        }   
    }

    static async addMovie(req, res, next){
        console.log('[Add Movie Controller]', req.body);
        const {error,value} = schema.validate(req.body);
        // console.log(`[Controller add movie error:] ${value} - ${error.details}`);
        if(error){
            const result = {
                msg:`Filme não incluído. Campos não foram preenchidos corretamente`,
                error:error.details
        }
        res.status(404).json(result);
        return;
        }
        try {
            const addedMovie = await Movie.addMovie(req.body);
            res.status(200).json(addedMovie);
        } catch (error) {
            res.status(500).json({error:error});
        }
    }

    static async deleteMovieByid(req, res, next){
        try{
            const id = req.params.id
            console.log(`id: `+ id);
            const removeMovie = await Movie.deleteMovieByid(id);
            res.status(200).json(removeMovie);
        }catch(error){
            res.status(500).json({error:error});
        }
    }

    static async updateMovieById(req, res,next){
        try {
            const id = req.params.id
            const updateMovie = Movie.updateMovieById(id);
            res.status(200).json(updateMovie);
        } catch (error) {
            res.status(500).json({error:error});
        }
    }
}