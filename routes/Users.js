const express = require("express");
const users = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");

require('dotenv').config();

const User = require("../models/User");
users.use(cors());

process.env.SECRET_KEY = 'secret';



users.post("/register", (req, res) => {
    const today = new Date().toLocaleString()
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

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
            }
        })
    let mailOptions = {
        from: 'artemdev0109@gmail.com',
        to: req.body.email,
        subject: 'Your registration request was accepted',
        text: 'We will send you mail with answer later'
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
                res.json({errorText: user.email +" registered", status: "success"})
            })
            .then(() => {
                // sending mail to the participant email
                 transporter.sendMail(mailOptions, (err, data) => {
                     if(err) {
                         console.log('------Error:', err)
                     } else {
                         console.log('Email sent!!!!!')
                     }
                 })
             })
            .catch(err => {
                res.send("error: "+ err)
            })
        } else {
            res.json({errorText: "This email is already registered", status: "faild"})
            // console.log(res)
            console.log("This email is already registered")
        }
    })
    
    .catch(err => {
        res.send("error: " + err)
        console.log(err)
    })
})

module.exports = users;

