var config = require('../config/config')['development']
var Sequelize = require('sequelize');
var sequelize = new Sequelize(
	config.database,
	config.username, // user
	config.password, // password
	{
		dialect: config.dialect,
		port: 3306,
	}
);

// Test connection
sequelize
	.authenticate()
	.then(function() {
		console.log('Connection has been established successfully.');
	})
	.catch(function(err) {
		console.log('Unable to connect to MySQL server:', err);
	})
	.done();

// Import models
var Customer = sequelize.import('../models/Customer'),
	Bill = sequelize.import('../models/Bill'),
	Inventory = sequelize.import('../models/Inventory'),
	Product = sequelize.import('../models/Product'),
	Supplier = sequelize.import('../models/Supplier'),
	Transaction = sequelize.import('../models/Transaction');

Supplier.hasMany(Product);
Product.hasOne(Inventory);
Product.hasMany(Transaction);
Bill.hasMany(Transaction);
Customer.hasMany(Bill);

sequelize.sync().then(function() {
	console.log("database sync done");
	// process.exit();
});

// Export
module.exports = {
	Sequelize: Sequelize,
	sequelize: sequelize,
	models: {
		Bill: Bill,
		Customer: Customer,
		Inventory: Inventory,
		Product: Product,
		Supplier: Supplier,
		Transaction: Transaction,
	},
};