// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    insert: function(burgerName, cb) {
      orm.insertOne("burgers", burgerName, function(res) {
        cb(res);
      });
    },
    update: function(columnSet, condition, cb) {
      orm.updateOne("burgers", columnSet, condition, function(res) {
        cb(res);
      });
    }
  };
  
  // Export the database functions for the controller (burgers_controller.js).
  module.exports = burger;
  