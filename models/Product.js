module.exports = function(sequelize, Sequelize) {
	return sequelize.define('Product', {
		name: Sequelize.STRING,
		code: Sequelize.STRING,
		product_group: Sequelize.STRING,
		color: Sequelize.STRING,
		size: Sequelize.FLOAT,
		image: Sequelize.STRING,
		unit_price: Sequelize.FLOAT,
		// supplier_id: {
		// 	model: Supplier,
		// 	key: 'id',
		// },
		manufacture_date: Sequelize.DATEONLY,
		description: Sequelize.STRING,
	});
};