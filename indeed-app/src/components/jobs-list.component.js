import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Job = (props) => (
  <tr>
    <td>
      <Link to={"/edit/" + props.job._id}>edit</Link>{" "}
      <a
        href="#"
        onClick={() => {
          props.deleteJob(props.job._id);
        }}
      >
        <p>soft delete</p>
      </a>
    </td>
    <td>{props.job.JobTitle}</td>
    <td>{props.job.Company}</td>
    <td>{props.job.Location}</td>
    <td>{props.job.JobSalary}</td>
    <td>{props.job.JobSummary}</td>
    <td>{props.job.PostDate}</td>
    <td>{props.job.JobLink}</td>
  </tr>
);

export default class JobList extends Component {
  constructor(props) {
    super(props);

    this.deleteJob = this.deleteJob.bind(this);

    this.state = {
      jobs: [],
      search: "",
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/jobs/")
      .then((response) => {
        this.setState({ jobs: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  deleteJob(id) {
    // axios.delete("http://localhost:5000/jobs/" + id).then((response) => {
    //   console.log(response.data);
    // });

    this.setState({
      jobs: this.state.jobs.filter((el) => el._id !== id),
    });
  }

  jobList() {
    return this.state.jobs.map((currentjob) => {
      const { search } = this.state;
      if (
        search !== "" &&
        currentjob.JobTitle.toLowerCase().indexOf(search.toLowerCase()) === -1 &&
        currentjob.JobSummary.toLowerCase().indexOf(search.toLowerCase()) === -1 &&
        currentjob.Location.toLowerCase().indexOf(search.toLowerCase()) === -1 &&
        currentjob.Company.toLowerCase().indexOf(search.toLowerCase()) === -1
      ) {
        return null;
      }
      return (
        <Job job={currentjob} deleteJob={this.deleteJob} key={currentjob._id} />
      );
    });
  }
  onchange = (e) => {
    this.setState({ search: e.target.value });
  };
  render() {
    return (
      <div>
        <h3>Indeed Jobs</h3>
        <table className="table">
          <thead className="thead-light">
            <input label="Search Job" icon="search" onChange={this.onchange} />

            <tr>
              <th>operation</th>
              <th>JobTitle</th>
              <th>Company</th>
              <th>Location</th>
              <th>JobSalary</th>
              <th>JobSummary</th>
              <th>PostDate</th>
              <th>JobLink</th>
            </tr>
          </thead>
          <tbody>{this.jobList()}</tbody>
        </table>
      </div>
    );
  }
}
