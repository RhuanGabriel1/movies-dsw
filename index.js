const app = require("./config/server");
const routes = require('./app/routes/routes');

routes.getMovies(app);
routes.addMovie(app);
routes.deleteMovieByid(app);