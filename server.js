const express = require('express');
const dotenv = require('dotenv');
//const pool = require('./db');
const app = express();

dotenv.config({path: '.env-local'});

const port = process.env.PORT || '5001';

app.use(express.json());
app.use(express.urlencoded({extended:false}));

// routes
app.get('/', (request, response) => {
    response.status(200).send("This is not why you're here. Head to /ingredient.");
})

const ingredientRouter = require('./routes/ingredient');
app.use('/ingredient', ingredientRouter);
/*
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
*/

app.listen(port, () => console.log(`Listening on port ${port}`));
