const express = require("express");
const cors = require("cors");
const contactsRouter = require("./app/routes/contact.route");
const app = express();
const ApiError = require("./app/api-error");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({message: "welcome to contact book application."});
});

app.use("/api/contacts", contactsRouter);


// handle 404 response
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })

module.exports = app;