module.exports = (sequelize, Sequelize) => {
    const Contacts = sequelize.define("contacts", {
        
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
    });
  
    return Contacts;
};


        // a "model" refers to a representation of the data structure or schema that is used to interact with a database.
        //Models are a fundamental concept in Object-Relational Mapping (ORM) systems like Sequelize, which abstract the i
        //nteraction with a relational database and allow developers to work with data in a more object-oriented way.
