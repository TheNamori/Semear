const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;

app.use("/js", express.static(__dirname + "/node_modules/bootstrap/dist/js"));
app.use("/js", express.static(__dirname + "/node_modules/jquery/dist"));
app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));
app.use(
  "/fontawesome",
  express.static(__dirname + "/node_modules/@fortawesome/fontawesome-free/")
);
app.use(express.static(path.join(__dirname, "public")));

app.set(path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
app.get("/", (req, res) => res.render("index"));
