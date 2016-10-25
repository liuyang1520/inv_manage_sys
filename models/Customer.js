module.exports = function(sequelize, Sequelize) {
	return sequelize.define('Customer', {
		name: Sequelize.STRING,
		phone: Sequelize.STRING,
		email: Sequelize.STRING,
		address: Sequelize.STRING,
		description: Sequelize.STRING,
	});
};