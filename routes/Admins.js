const express = require("express");
const admins = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

require('dotenv').config();

const User = require("../models/User");
admins.use(cors());

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
            
            // НУЖНО ИСПОЛЬЗОВАТЬ BCRYPT.COMPARESYNC - УЗНАТЬ КАК ЭТО ДЛЕАТЬ, ПОКА ЧТО ДЕЛАЮ ТАК. ДЛЯ АДМИНОВ НУЖНО ПО ДРУГОМУ
            // if(bcrypt.compareSync(req.body.password, user.password)) {
            if(req.body.password === user.password) {
                let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                    expiresIn: 1440
                })
                console.log(token)
                res.send(token)
            } 
            
        } else {
            res.status(400).json({error: "User does not exist"})
        }
    })
    .catch(err => {
        res.status(400).json({ error: err })
    })
})

module.exports = admins;