var connection = require("../config/connection.js");

var orm = {
    selectAll: function (table, cb) {
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });

    },
    insertOne: function (table, valName, cb) {
            var queryString = `INSERT INTO ${table} (burger_name) VALUES (?)`;

            console.log(queryString);
            console.log("after queryString: " + valName);

            connection.query(queryString, [valName], function (err, result) {
                if (err) {
                    throw err;
                }
                cb(result);
            });
    },
    updateOne: function (table, columnSet, condition, cb) {
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

module.exports = orm;