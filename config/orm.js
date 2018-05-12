var connection = require("./connection.js");

var orm = {
    //This fx will take the table input and return all the data in a callback
    selectAll: function(table, cb) {
        connection.query(`SELECT * FROM ${table};`, function(err, res){
            if(err) throw err;
            //This callback will allow the data to be used in the 'Models' folder
            cb(res);
        })
    }
    

}

module.exports = orm;
//insertOne()
//updateOne()