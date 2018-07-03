var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/db_kurs_mongo';

MongoClient.connect(url, function(err, db){
	if (err) {
		console.log(err);
	} else {
		listProducts(db, function(){
			db.close();
		});
	}
});

var listProducts = function(db, callback) {
	var cursor = db.collection('products').find(
			{ category: "software" },
			{ _id: 0, name: 1, price: 1 }
		);
	cursor.each(function(err, doc){
		console.log(doc);
		callback();
	});
}
