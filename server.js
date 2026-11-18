

const express = require("express");
const app = express();

app.use(express.json());

app.use(express.static("public"));

var courses = [];
var nextId = 1;

// Get
app.get("/courses", function (req, res) {
  res.json(courses);
});
//add
app.post("/courses", function (req, res) {
  var course = {
    id: nextId,
    name: req.body.name,
    code: req.body.code,
    department: req.body.department
  };
  nextId = nextId + 1;
  courses.push(course);
  res.json(course);
});

// 3. Delete
app.delete("/courses/:id", function (req, res) {
  var id = Number(req.params.id);
  courses = courses.filter(function (c) {
    return c.id !== id;
  });
  res.json({ message: "Deleted" });
});


app.listen(3000, function () {
  console.log("Server running at http://localhost:3000");
});
