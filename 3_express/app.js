const express = require("express");
const customMiddleware = require("./middleware/customMiddleware");
const morgan = require("morgan");
const app = express();
app.use(express.json());
app.use(customMiddleware);
app.use(morgan());
app.use(morgan("tiny"));
app.use(function (req, res, next) {
  console.log("I am middleware inside app file");
  next();
});

const courses = [
  {
    id: 1,
    name: "JS",
  },
  {
    id: 2,
    name: "ReactJS",
  },
  {
    id: 3,
    name: "NodeJS",
  },
  {
    id: 4,
    name: "CSS",
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
app.get("/courses", (req, res) => {
  res.send(courses);
});
app.put("/courses/:coursename", (req, res) => {
  const course = courses.find(
    (course) => course.name === req.params.coursename
  );
  if (!course) res.status(404).send("Course you search for does not exist");
  course.name = req.body.name;
  res.send(course);
});
app.post("/courses", (req, res) => {
  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.send(course);
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
