var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.all(function (data) {
        var burgersObject = {
            burgers: data
        };
        console.log(burgersObject);
        res.render("index", burgersObject);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.insert(req.body.name, function (result) {
        // Send back the ID of the new burger
        res.json({ id: result.insertId });
        console.log("controller says: " + req.body.name);
    });
});

router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    devouredStatus = `devoured = ${req.body.devoured}`

    console.log("condition", condition);

    burger.update(devouredStatus, condition, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;