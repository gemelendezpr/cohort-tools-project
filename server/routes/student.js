var express = require("express");
var router = express.Router();

const Student = require("../models/Student");

router.post("/", (req, res, next) => {
  Student.create(req.body)
    .then((createdStudent) => {
      console.log("Student created ->", createdStudent);
      res.status(201).send(createdStudent);
    })
    .catch((error) => {
      console.error("Error while creating the student ->", error);
      res.status(500).send({ error: "Failed to create the student" });
    });
});

router.get("/", (req, res, next) => {
    console.log("Hitting get route");
    Student.find()
      .then((foundStudents) => {
        console.log(foundStudents);
        res.status(201).send(foundStudents);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send(err);
      });
  });

router.get("/cohort/:id", (req,res,next) => {
    Student.find({cohort: req.params.id})
    .then((foundStudents) => {
        console.log(foundStudents);
        res.status(201).send(foundStudents);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send(err);
      });
})

router.get("/:id", (req, res, next) => {
  console.log("Hitting get route");
  Student.findById(req.params.id)
    .then((foundStudents) => {
      console.log(foundStudents);
      res.status(201).send(foundStudents);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
});

router.post("/update/:id", (req, res, next) => {
  Student.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updatedStudent) => {
      console.log(updatedStudent);
      res.status(200).send(updatedStudent);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
});

router.get("/delete/:id", (req, res, next) => {
  Student.findByIdAndDelete(req.params.id)
    .then((updatedStudent) => {
      console.log(updatedStudent);
      res.status(200).send(updatedStudent);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
});

module.exports = router;
