const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const Contact = sequelize.define("Contact", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        message: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    }, {
        tableName: "contact",
        timestamps: false,
    });

    return Contact;
};