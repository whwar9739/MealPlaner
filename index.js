const express = require("express");
const app = express();
const port = 5000;
const ingredientRouter = require("./routes/ingredient.js");

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.get("/", (req, res) => {
    res.json({ message: "ok"});
});

app.use("/ingredient", ingredientRouter);

app.use((err, req, res, next) => {
    const statusCode = err.StatusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).jso({ message: err.message });
    return;
});

app.listen(port, () => {
    console.log('Example app listening at http://localhost:${port}');
});