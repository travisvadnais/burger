var express = require('express');
var router = express.Router();
var burger = require("../models/burgers.js");

router.get("/", function(req,res){
    burger.selectAll(function(burger_data){
        console.log(burger_data);
        res.render("index");
    })
});

module.exports = router;