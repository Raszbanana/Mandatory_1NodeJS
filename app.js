const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());

app.use(express.static(__dirname + "/public/pages"));
app.use(express.static(__dirname + "/public/components"));


const nav = fs
  .readFileSync(__dirname + "/public/components/nav/nav.html")
  .toString();

const footer = fs
  .readFileSync(__dirname + "/public/components/footer/footer.html")
  .toString();

const home = fs
  .readFileSync(__dirname + "/public/pages/home/home.html")
  .toString();

const weekOne = fs
  .readFileSync(__dirname + "/public/pages/weekOne/weekOne.html")
  .toString();

const weekTwo = fs
  .readFileSync(__dirname + "/public/pages/weekTwo/weekTwo.html")
  .toString();

const weekThree = fs
  .readFileSync(__dirname + "/public/pages/weekThree/weekThree.html")
  .toString();

const weekFour = fs
  .readFileSync(__dirname + "/public/pages/weekFour/weekFour.html")
  .toString();

const homePage = nav + home + footer;
const weekOnePage = nav + weekOne + footer;
const weekTwoPage = nav + weekTwo + footer;
const weekThreePage = nav + weekThree + footer;
const weekFourPage = nav + weekFour + footer;

app.get("/", (req, res) => {
  res.send(homePage);
});

app.get("/weekOne", (req, res) => {
  res.send(weekOnePage);
});

app.get("/weekTwo", (req, res) => {
  res.send(weekTwoPage);
});

app.get("/weekThree", (req, res) => {
  res.send(weekThreePage);
});

app.get("/weekFour", (req, res) => {
  res.send(weekFourPage);
});

app.listen(3000, (req, res) => {
  console.log("App listening on port 3000");
});
