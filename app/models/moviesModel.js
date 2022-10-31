const client = require('../../config/dbConnection');
const {ObjectId} = require('mongodb');

module.exports = class MovieModel{
    static async getAllMovies(){
        console.log('[getallmovies]');
        const result = await client.db("dsw").collection("movies").find();
        const movies = await result.toArray();
        console.log(movies);
        return movies;
    }

    static async getMovieById(movieId){
        console.log(`[getMovieById Model] ${movieId}`);
        movieId = new ObjectId(movieId);
        const movie = await client.db("dsw").collection("movies").findOne({_id:movieId});
        return movie;
    }

    static async updateMovieById(movieId){
        console.log(`[updateMovieById Model] ${movieId}`);
        movieId = new ObjectId(movieId);
        try {
            
        } catch (error) {
            console.log(`[movieUpdateService] Error: ${error}`);
        }
    }

    static async deleteMovieByid(movieId){
        console.log(`[deleteMovieById Model] ${movieId}`);
        movieId = new ObjectId(movieId);
        try {
            client.db("dsw").collection("movies").deleteOne({_id:movieId});
        } catch (error) {
            console.log(`[movieDeleteService] Error: ${error}`);
        }
    }

    static async addMovie(data){
        console.log(`[Movie Model - Add Movie] ${data}`);
        try {
            const newMovie = {name: data.name, director: data.director, link:data.link}
            const addedMovie = await client.db("dsw").collection("movies").insertOne(newMovie);
            console.log(`New Movie inserted with following id ${addedMovies.insertedId}`);
            return addedMovie;
        } catch (error) {
            console.log(`[movieService] Error: ${error}`);
        }
    }
}