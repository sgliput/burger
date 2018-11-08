var connection = require("../config/connection.js");

var orm = {
    //selectAll method grabs all burger records from table
    selectAll: function (table, cb) {
        //SELECT statement
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });

    },
    //insertOne method inserts new burger record into table
    insertOne: function (table, valName, cb) {
            //INSERT INTO statement
            var queryString = `INSERT INTO ${table} (burger_name) VALUES (?)`;

            console.log(queryString);
            console.log("after queryString: " + valName);

            //valName in separate array to avoid SQL injection problems
            connection.query(queryString, [valName], function (err, result) {
                if (err) {
                    throw err;
                }
                cb(result);
            });
    },
    //updateOne method update burger record depending on condition (id passed from devoured button)
    updateOne: function (table, columnSet, condition, cb) {
        //UPDATE statement with variables not in danger of SQL injection
        var queryString = `UPDATE ${table} SET ${columnSet} WHERE ${condition}`;

        console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
    }
}

//Export orm object to burger.js model
module.exports = orm;