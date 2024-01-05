var express = require("express");
var router = express.Router();

const Cohort = require("../models/Cohort")

router.post("/", (req, res, next) => {
  Cohort.create(req.body)
    .then((createdCohort) => {
      console.log("Cohort created ->", createdCohort);
      res.status(201).send(createdCohort);
    })
    .catch((error) => {
      console.error("Error while creating the book ->", error);
      res.status(500).send({ error: "Failed to create the book" });
    })
});

router.get("/", (req, res, next) => {
    console.log("Hitting get route")
  Cohort.find()
    .then((foundCohorts) => {
      console.log(foundCohorts);
      res.status(201).send(foundCohorts);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    })
});

router.post("/update/:id", (req, res, next) => {
  Cohort.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updatedCohort) => {
      console.log(updatedCohort);
      res.status(200).send(updatedCohort);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    })
});

router.get('/delete/:id', (req, res, next) => {
    Cohort.findByIdAndDelete(
        req.params.id
    )
    .then((updatedCohort) => {
        console.log(updatedCohort);
        res.status(200).send(updatedCohort);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send(err);
      })
});


module.exports = router;
