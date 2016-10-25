module.exports = function(sequelize, Sequelize) {
	return sequelize.define('Supplier', {
		name: Sequelize.STRING,
		phone: Sequelize.STRING,
		email: Sequelize.STRING,
		address: Sequelize.STRING,
		web: Sequelize.STRING,
		description: Sequelize.STRING,
	});
};