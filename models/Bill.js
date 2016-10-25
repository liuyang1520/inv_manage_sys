module.exports = function(sequelize, Sequelize) {
	return sequelize.define('Bill', {
		// customer_id: {
		// 	model: Customer,
		// 	key: 'id',
		// },
		amount: Sequelize.FLOAT,
		date: Sequelize.DATE,
		description: Sequelize.STRING,
	});
};