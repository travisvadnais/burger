var express = require('express');
var router = express.Router();
var burger = require("../models/burgers.js");

router.get("/", function(req,res){
    burger.selectAll(function(burger_data){
        console.log(burger_data);
        res.render("index");
    })
});

router.put("/burgers/update", function(req, res) {
    burger.update(req.body.burger_id, function(res){
        console.log(res);
        res.redirect('/');
    })
})

router.post("/burgers/insert", function(req, res) {
    burger.insertOne(req.body.burger_name, function(res) {
        res.redirect('/');
    })
})

module.exports = router;