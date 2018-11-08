var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    //Gets all burgers from the all method in the burger.js model
    burger.all(function (data) {
        var burgersObject = {
            burgers: data
        };
        console.log(burgersObject);
        //Displays the array of burgers in index.handlebars
        res.render("index", burgersObject);
    });
});

router.post("/api/burgers", function (req, res) {
    //Posts a new burger with the insert method in the burger.js model, passing it the name of the new burger
    burger.insert(req.body.name, function (result) {
        // Send back the ID of the new burger
        res.json({ id: result.insertId });
        console.log("controller says: " + req.body.name);
    });
});

router.put("/api/burgers/:id", function (req, res) {
    //Containing the id and devoured status to variables
    var condition = "id = " + req.params.id;
    devouredStatus = `devoured = ${req.body.devoured}`

    console.log("condition", condition);

    //Puts an updated burger with the update method in the burger.js model, passing it the devoured status and id condition (for the WHERE clause)
    burger.update(devouredStatus, condition, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

//Export the router for the server.js file
module.exports = router;