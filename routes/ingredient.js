const express = require('express');
const router = express.Router();
const ingredient = require('../services/ingredient.js');

router.get('/', async function(req, res, next) {
    try {
        res.json(await ingredient.getMultiple(req.query.page));
    } catch (err) {
        console.error('Error while getting ingredients', err.message);
        next(err);
    }
});

module.exports = router;