var orm = require('../config/orm.js');

var burger = {
    selectAll: function(cb) {
        orm.selectAll('burgers', function(res){
            cb(res);
        })
    },

    update: function(id, cb) {
        orm.update('burgers', id, cb);
    },

    insertOne: function(name, cb) {
        orm.insertOne('burgers', name, cb);
    }
}

module.exports = burger;