module.exports = (sequelize, Sequelize) => {
    const Phones = sequelize.define("phones", {
        
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        // DEFINE YOUR MODEL HERE
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },

        phoneNumber: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        
        contactId: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
    });
  
    return Phones;
};

