const express = require("express");
const models = require("./../Models");
const adtsRouter = express.Router();

adtsRouter.post("/", async (req, res) => {
    let newAdt = new models.Advertisement({type: "Квартира", area: 56, rent: false, price: 45000000, city: "Almaty", street: "Al-Farabi"});
    
    await newAdt.save();

    res.status(200).send("user added");
});

module.exports = adtsRouter;