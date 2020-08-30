const routes = require('express').Router();
const { Category } = require ('./app/models');

Category.create({
    name: "Lazer"
});


module.exports = routes;