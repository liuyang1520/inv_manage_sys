module.exports = function(sequelize, Sequelize) {
	return sequelize.define('Inventory', {
		// product_id: {
		// 	model: Product,
		// 	key: 'id',
		// },
		storage_location: Sequelize.STRING,
		quantity: Sequelize.INTEGER,
		special_offer: Sequelize.FLOAT,
		description: Sequelize.STRING,
	});
};