// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    //Method that calls selectAll function from ORM, entering the burgers table
    all: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    //Method that calls the insertOne function from ORM, entering the burgers table and the burgerName input
    insert: function(burgerName, cb) {
      orm.insertOne("burgers", burgerName, function(res) {
        cb(res);
      });
    },
    //Method that calls the updateOne function from ORM, entering the burgers table, the column's new setting (devoured=true), and the WHERE condition (example: id=4)
    update: function(columnSet, condition, cb) {
      orm.updateOne("burgers", columnSet, condition, function(res) {
        cb(res);
      });
    }
  };
  
  // Export the database functions for the controller (burgers_controller.js)
  module.exports = burger;
  