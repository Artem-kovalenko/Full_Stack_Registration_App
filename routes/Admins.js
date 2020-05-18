const express = require("express");
const admins = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;

require('dotenv').config();

const User = require("../models/User");
admins.use(cors());

admins.get('/getAdmins', (req, res) => {
    User.findAll({
        where: {
            main_role: "admin"
        }
    })
        .then(users => {
            let admins = JSON.stringify(users, null, 2)
            res.send(admins)
        })
})

admins.post('/login', (req, res) => {
    User.findOne({
        where: {
            user_email: req.body.user_email
        }
    })
    .then(user => {
        if(user) {
            console.log(user.password)
            console.log(req.body.password)
            console.log(bcrypt.compareSync(req.body.password, user.password))

            if(bcrypt.compareSync(req.body.password, user.password)) {
                let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                    expiresIn: 1440
                })
                console.log(token)
                res.send(token)
            } else {
                console.log("compare - false")
                res.status(400).json({error: "Wrong passowrd"})
            }
        }
    })
    // .catch(err => {
    //     res.status(400).json({ error: err })
    // })
})

admins.post('/createSup', (req, res) => {
    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(req.body.password, salt, function(err, hash) {
            // Store hash in your password DB.
            const today = new Date().toLocaleString()
            const todaySubStr = today.substr(0, today.length - 3)
            const adminData = {
                main_role: req.body.main_role,
                first_name: null,
                last_name: null,
                user_email: req.body.user_email,
                password: hash,
                arrival: null,
                departure: null,
                company_name: null,
                position_in_company: null,
                participant_role: null,
                sex: null,
                birthday: null,
                county_name: null,
                status: null,
                created: todaySubStr
            }
            User.findOne({
                where: {
                    user_email: req.body.user_email
                }
            })
                .then(user => {
                    if(!user) {
                        User.create(adminData)
                            .then(user => {
                                res.json({errorText: user.user_email +" registered", status: "success"})
                            })
                            .catch(err => {
                                res.send("error: "+ err)
                            })
                    }
                })
                .catch(err => {
                    res.send("error: " + err)
                    console.log(err)
                })


        });
    });

})
module.exports = admins;