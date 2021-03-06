const Sequelize = require("sequelize");
const db = require("../database/db");

module.exports = db.sequelize.define(
    "user",
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        main_role: {
            type: Sequelize.STRING
        },
        user_email: {
            type: Sequelize.STRING,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: Sequelize.STRING
        },
        first_name: {
            type: Sequelize.STRING
        },
        last_name: {
            type: Sequelize.STRING
        },
        departure: {
            type: Sequelize.STRING
        },
        arrival: {
            type: Sequelize.STRING
        },
        company_name: {
            type: Sequelize.STRING
        },
        position_in_company: {
            type: Sequelize.STRING
        },
        participant_role: {
            type: Sequelize.STRING
        },
        sex: {
            type: Sequelize.STRING
        },
        birthday: {
            type: Sequelize.STRING
        },
        county_name: {
            type: Sequelize.STRING
        },
        status: {
            type: Sequelize.STRING
        },
        created: {
            type: Sequelize.STRING,
            defaultValue: Sequelize.NOW
        }
    },
    {
        timestamps: false
    }
)