const express = require("express");
const models = require("./../Models");
const usersRouter = express.Router();

usersRouter.post("/register", async (req, res) => {
    let name = req.fields.name;
    let email = req.fields.email;
    let password = req.fields.password;

    let sameEmail = await models.User.find({email: email});
    console.log(sameEmail);

    if (sameEmail.length != 0) {
        res.send("email is already used");
    }

    else {
        let newUser = new models.User({name, email, password});

        await newUser.save();

        res.status(200).send("user added");
    }
});

usersRouter.post("/login", async (req, res) => {
    let email = req.fields.email;
    let password = req.fields.password;

    let emailFound = await models.User.find({email: email});

    if (emailFound.length != 0) {
        if (emailFound[0].password == password) {
            res.status(200).send("logged in");
            console.log(200);
        }

        else {
            res.status(401).send("incorrect password");
            console.log(401);
        }
    }


    else {
        res.status(404).send("incorrect email or does not exist");
        console.log(404);
    }
    
});

module.exports = usersRouter;