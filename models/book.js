var mongoose = require('mongoose');

//Book Schema
var bookSchema = mongoose.Schema({
	title:{
		type: String,
		required: true
	},
	genre:{
       type: String,
	   required: true 
	},
	description:{
       type: String,
	   required: true
	},
	author:{
		type: String,
		required: true
	},
    publisher:{
    	type: String
    },
    pages:{
    	type: String
    },
    image_URL:{
    	type: String
    },
    buy_URL:{
    	type: String
    }
});

var Book = module.exports = mongoose.model('Book', bookSchema);



const getBooks = function(callback, limit){
   Book.find(callback).limit(limit);
}

const getBookById = function(id, callback){
   Book.findById(id, callback);
}

//
const addBook = function(book, callback)
{
	Book.create(book, callback);
}

//update Book
const updateBook = function(id, book, options, callback)
{
	var query = {_id: id};
	var update = {
 			title : book.title,
 			genre : book.genre,
 			description : book.description,
 			author : book.author,
 			publisher : book.publisher,
 			pages : book.pages,
 			image_URL : book.image_URL,
 			buy_URL : book.buy_URL
	}
	Book.findOneAndUpdate(query, update, options, callback);

}

//delete Book
const deleteBook = function(id, callback)
{
	var query = {_id: id};
	Book.remove(query, callback);
}
module.exports = {
	getBooks,
	getBookById,
	addBook,
	updateBook,
	deleteBook
}