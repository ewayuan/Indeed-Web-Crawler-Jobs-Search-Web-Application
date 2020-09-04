const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const jobSchema = new Schema({
  JobTitle: { type: String, required: true },
  Company: { type: String, required: false },
  Location: { type: String, required: false },
  JobSalary: { type: String, required: false },
  JobSummary: { type: String, required: false },
  PostDate: { type: String, required: false },
  JobLink: { type: String, required: false },
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;