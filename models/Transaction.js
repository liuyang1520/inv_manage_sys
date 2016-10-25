module.exports = function(sequelize, Sequelize) {
	return sequelize.define('Transaction', {
		// bill_id: {
		// 	model: Bill,
		// 	key: 'id',
		// },
		// product_id: {
		// 	model: Product,
		// 	key: 'id',
		// },
		amount: Sequelize.FLOAT,
		quantity: Sequelize.INTEGER,
		discount: Sequelize.FLOAT,
		date: Sequelize.DATE,
		description: Sequelize.STRING,
	});
};