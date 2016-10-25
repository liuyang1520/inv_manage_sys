var db = require('./connection');

db.sequelize.sync().then(function() {
	console.log("database sync done");
	process.exit();
});