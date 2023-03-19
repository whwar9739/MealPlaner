const express = require('express');
const helper = require('../helper.js');
const config = require('../config.js');
const pool = require('./db');
const app = express();
const port = 5000;


async function getMultiple(page = 1){
    const offset = helper.getOffset(page, config.listPerPage);
    const conn = await pool.getConnection();

    var query = "select * from Ingredient limit ${offset},${config.listPerPage}";

    var rows = await conn.query(query);

    const data = helper.emptyOrRows(rows);
    const meta = {page};

    return {
        data,
        meta
    }
}

/*
// here we expose an endpoint "ingredients"
app.get('/ingredient', async (req, res) => {
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
});

app.put('/ingredient', async(req,res) => {
    let conn;
    try {
        conn = await pool.getConnection();
    }
})
*/

//app.listen(port, () => console.log(`Listening on port ${port}`));
