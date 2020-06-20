const express = require('express');
const app = express();
//const exphbs = require('express-handlebars');
var datetime = require("node-datetime");

// app.engine('handlebars', exphbs({ defaultLayout: 'index' }));
// app.set('view engine', 'handlebars');

var date = datetime.create(new Date());
var day = date.format("W");
var hour = date.format("H:M");
var MaxDay = "Sunday";
var minDay = "Saturday";
var MaxTime = "17:00";
var minTime = "09:00";

const now = new Date();

app.use(express.static(__dirname + "/nav"));

app.get("/", (req, res) => {
  if (hour < MaxTime && hour > minTime) {
    if (day != MaxDay && day != minDay) {
      res.sendFile(__dirname + "/nav/home.html");
    } else {
        res.send(" Sorry we are closed");
    }
  } else {
    res.send(" Sorry we are closed");
  }
});
  

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

