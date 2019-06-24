const express = require('express');
const controller = require('./humans.controller');
const router = express.Router();

// get list of humans with name and age
router.get('/', controller.list);
// get list of Human's Pets with name and type
router.get('/:humanName/pets', controller.pets);

module.exports = router;