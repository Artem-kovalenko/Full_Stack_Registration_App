const express = require("express");
const users = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");

const User = require("../models/User");
users.use(cors());

process.env.SECRET_KEY = 'secret';

users.post("/register", (req, res) => {
    const today = new Date().toLocaleString()
    // const today = new Date()
    console.log(req.body.first_name)
    console.log(today)
    const userData = {
        main_role: req.body.main_role,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        dateofarrivalanddeparture: req.body.dateofarrivalanddeparture,
        company_name: req.body.company_name,
        position_in_company: req.body.position_in_company,
        participant_role: req.body.participant_role,
        sex: req.body.sex,
        birthday: req.body.birthday,
        county_name: req.body.county_name,
        status: req.body.status,
        created: today
    }

    User.findOne({
        where: {
            email: req.body.email
        }
    })
    .then(user => {
        if (!user) {
            User.create(userData)
            .then(user => {
                res.json({status: user.email +" registered"})
            })
            .catch(err => {
                res.send("error: "+ err)
            })
        } else {
            res.json({error: "This email is already registered"})
        }
    })
    .catch(err => {
        res.send("error: " + err)
    })
})

module.exports = users;

