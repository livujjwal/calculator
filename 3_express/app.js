const express = require("express");

const app = express();

const courses = [
  {
    id: 1,
    title: "JS",
  },
  {
    id: 2,
    title: "ReactJS",
  },
  {
    id: 3,
    title: "NodeJS",
  },
  {
    id: 4,
    title: "CSS",
  },
];

app.get("/", (req, res) => {
  res.send("Hello welcome to express");
});

app.get("/about", (req, res) => {
  res.send("About page render");
});
app.get("/contact", (req, res) => {
  res.send("Contactde page render");
});
app.get("/home", (req, res) => {
  res.send("Home page render");
});
// app.get("/coures/:id", (req, res) => {
//   res.send(req.params.id);
//   //   console.log(req.params);
// });
// app.get("/course/:id", (req, res) => {
//   const course = courses.find((course) => course.id === Number(req.params.id));
//   res.send(course);
// });
// app.get("/course/:title", (req, res) => {
//   const course = courses.find((course) => course.title === req.params.title);
//   res.send(course);
// });

//Handle blank page
app.get("/course/:title", (req, res) => {
  const course = courses.find((course) => course.title === req.params.title);
  if (!course) res.status(404).send("Course you search for does not exist");
  res.send(course);
});

const port = process.env.PORT || 2000;

app.listen(port, () => console.log("Port running on " + port));
