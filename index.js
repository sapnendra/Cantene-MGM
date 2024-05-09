import express from "express";

const app = express();
const port = 3000;

app.use(express.static("./public"));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/home", (req, res) => {
    res.render("index.ejs");
});

app.get("/about", (req, res) => {
    res.render("about.ejs");
});

app.get("/menu", (req, res) => {
    res.render("menu.ejs");
});

app.get("/feedback", (req, res) => {
    res.render("about.ejs");
});

app.get("/login", (req, res) => {
    res.render("login.ejs");
});

app.get("/register", (req, res) => {
    res.render("register.ejs");
});

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});