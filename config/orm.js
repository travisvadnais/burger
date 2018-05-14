var connection = require("./connection.js");

var orm = {
    //This fx takes in the table name and the cb fx passed in from burgers.js
    selectAll: function(table, cb) {
        connection.query(`SELECT * FROM ${table};`, function(err, res){
            if(err) throw err;
            //The cb fx that was passed in will take the response from the DB and. . . 
            //. . . boomerangs it back up to burgers.js
            cb(res);
        })
    },

    update: function(table, burger_id, cb) {
        connection.query(`UPDATE ${table} SET devoured=true WHERE id=${burger_id};`, function(err, res) {
            if(err) throw err;
            cb(res);
        })
    },

    insertOne: function(table, name, cb) {
        connection.query(`INSERT INTO ${table} (burger_name) VALUES ("${name}");`, function(err, res){
            if(err) throw err;
            cb(res);
        })
    }
}

module.exports = orm;