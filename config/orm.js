var connection = require("./connection.js");

var orm = {
    //This fx will take the table input and return all the data in a callback
    selectAll: function(table, cb) {
        connection.query(`SELECT * FROM ${table};`, function(err, res){
            if(err) throw err;
            //This callback will allow the data to be used in the 'Models' folder
            cb(res);
        })
    },

    update: function(table, devoured, cb) {
        connection.query(`UPDATE ${table} SET devoured=true WHERE id=${devoured};`, function(err, res) {
            if(err) throw err;
            cb(res);
        })
    },

    insertOne: function(table, val, cb) {
        connection.query(`INSERT INTO ${table} (burger_name) VALUES ${val};`, function(err, res){
            if(err) throw err;
            cb(res);
        })
    }

    
    

}

module.exports = orm;
//insertOne()
//updateOne()