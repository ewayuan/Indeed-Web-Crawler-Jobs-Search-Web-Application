const router = require("express").Router();
let Job = require("../models/job.model");

router.route("/").get((req, res) => {
  Job.find()
    .then((jobs) => res.json(jobs))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const JobTitle = req.body.JobTitle;
  const Company = req.body.Company;
  const Location = req.body.Location;
  const JobSalary = req.body.JobSalary;
  const JobSummary = req.body.JobSummary;
  const PostDate = req.body.PostDate;
  const JobLink = req.body.JobLink;

  const newJob = new Job({
    JobTitle,
    Company,
    Location,
    JobSalary,
    JobSummary,
    PostDate,
    JobLink
  });

  newJob
    .save()
    .then(() => res.json("Job added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Job.findById(req.params.id)
    .then((job) => res.json(job))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Job.findByIdAndDelete(req.params.id)
    .then(() => res.json("Job deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Job.findById(req.params.id)
    .then((job) => {
        job.JobTitle = req.body.JobTitle;
        job.Company = req.body.Company;
        job.Location = req.body.Location;
        job.JobSalary = req.body.JobSalary;
        job.JobSummary = req.body.JobSummary;
        job.PostDate = req.body.PostDate;
        job.JobLink = req.body.JobLink;

      job
        .save()
        .then(() => res.json("Job updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/keyword/search").get((req, res, next) => {
  var query = new RegExp('^' + req.query.q + '.*$', 'i');
  var result = [];
  mongodb.keywords.find(
    { word: query }, [ 'word' ], { limit: 5 },
    function (err, keywords) {
      keywords.forEach(function (k) {
        result.push(k.word);
      });
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end(result.join('\n'));
    });
});

module.exports = router;
