const express = require('express');
const router = express.Router();
const pool = require('../db');

router.get('/', async (req, res) => {
    response.status(200).send("This is why you're here.");

    /*
    let conn;
    try {
        // here we make a connection to MariaDB
        conn = await pool.getConnection();

        // create a new query to fetch all records from the table
        var query = "select * from Ingredient";

        // we run the query and set the result to a new variable
        var rows = await conn.query(query);

        // return the results
        res.send(rows);
    } catch (err) {
        throw err;
    } finally {
        if (conn) return conn.release();
    }
    */
});