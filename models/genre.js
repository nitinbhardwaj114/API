var mongoose = require('mongoose');

//Genre Schema
var genreSchema = mongoose.Schema({
	name:{
		type: String,
		required: true
	},
    create_date:{
    	type: Date,
    	default: Date.now
    }
});

var Genre = module.exports = mongoose.model('Genre', genreSchema);


// Get Genres
const getGenres = function(callback, limit){
   Genre.find(callback).limit(limit);
}

//Add Genres
const addGenre = function(genre, callback)
{
	Genre.create(genre, callback);
}

//Get Genre By Id
const getGenreById = function(id, callback){
   Genre.findById(id, callback);
}


// Update Genres
const updateGenre = function(id, genre, options, callback)
{
	var query = {_id: id};
	var update = {
 			name : genre.name
	}
	Genre.findOneAndUpdate(query, update, options, callback);

}

//delete Genre
const deleteGenre = function(id, callback)
{
	var query = {_id: id}
	Genre.remove(query, callback);
}

module.exports = {
	getGenres,
	addGenre,
	getGenreById,
	updateGenre,
	deleteGenre
}