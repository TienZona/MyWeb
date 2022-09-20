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
app.use((req, res, next) => {
    return next(new ApiError(404, "resuorce not found"));
})

app.use((err, req, res, next) => {
    return res.status(ApiError.statusCode || 500).json({
        message: ApiError.message || "Internal Server Error",
    });
});

module.exports = app;