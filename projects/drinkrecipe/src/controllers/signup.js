const express = require("express")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
require("dotenv").config()
const JWT_SECRET = process.env.JWT_SECRET

// const cryptoRandomString = require('crypto-random-string');

// const users = []
// const key = cryptoRandomString({ length: 32 });
// console.log('Random key:', key);

async function signUp(req, res, next) {

  try {
    const {
      firstname,
      lastname,
      email,
      phoneNumber,
      password
    } = req.body

    console.log("req body", req.body);

    const user = await prisma.users.findUnique({
      where: {
        email: email
      }
    })

    if (user) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const hashedpassword = await bcrypt.hash(password, 10)


    const createUser = await prisma.users.create({
      data: {
        firstname,
        lastname,
        email,
        phoneNumber,
        password: hashedpassword
      }
    })
    // const id = await prisma.users.id

    // const token = jwt.sign({ id: id }, JWT_SECRET, {
    //   expiresIn: "5days"
    // })

    // console.log('tok',token);


    if (createUser) {
      return res.status(201).json({ message: "created successfully" });
    }

    console.log("tok", token);




  } catch (error) {
    console.error("Error signing up user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = signUp