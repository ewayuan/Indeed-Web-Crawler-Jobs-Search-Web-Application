import React, { Component } from "react";
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateJobs extends Component {
  constructor(props) {
    super(props);

    this.onChangeJobTitle = this.onChangeJobTitle.bind(this);
    this.onChangeCompany = this.onChangeCompany.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onChangeJobSalary = this.onChangeJobSalary.bind(this);
    this.onChangeJobSummary = this.onChangeJobSummary.bind(this);
    this.onChangePostDate = this.onChangePostDate.bind(this);
    this.onChangeJobLink = this.onChangeJobLink.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      JobTitle: "",
      Company: "",
      Location: "",
      JobSalary: "",
      JobSummary: "",
      PostDate: "",
      JobLink: "",
    };
  }
  onChangeJobTitle(e) {
    this.setState({
      JobTitle: e.target.value,
    });
  }

  onChangeCompany(e) {
    this.setState({
      Company: e.target.value,
    });
  }

  onChangeLocation(e) {
    this.setState({
      Location: e.target.value,
    });
  }

  onChangeJobSalary(e) {
    this.setState({
      JobSalary: e.target.value,
    });
  }

  onChangeJobSummary(e) {
    this.setState({
      JobSummary: e.target.value,
    });
  }

  onChangePostDate(e) {
    this.setState({
      PostDate: e.target.value,
    });
  }

  onChangeJobLink(e) {
    this.setState({
      JobLink: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const job = {
      JobTitle: this.state.JobTitle,
      Company: this.state.Company,
      Location: this.state.Location,
      JobSalary: this.state.JobSalary,
      JobSummary: this.state.JobSummary,
      PostDate: this.state.PostDate,
      JobLink: this.state.JobLink,
    };

    console.log(job);

    axios
      .post("http://localhost:5000/jobs/add", job)
      .then((res) => console.log(res.data));

    window.location = "/";
  }





  render() {
    return (
    <div>
      <h3>Create New Job</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>JobTitle: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.JobTitle}
              onChange={this.onChangeJobTitle}
              />
        </div>
        <div className="form-group">
          <label>Company: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.Company}
              onChange={this.onChangeCompany}
              />
        </div>


        <div className="form-group">
          <label>Location: </label>
          <div>
          <input 
              type="text" 
              className="form-control"
              value={this.state.Location}
              onChange={this.onChangeLocation}
              />
          </div>
        </div>
        <div className="form-group">
          <label>JobSalary: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.JobSalary}
              onChange={this.onChangeJobSalary}
              />
        </div>
        <div className="form-group">
          <label>JobSummary: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.JobSummary}
              onChange={this.onChangeJobSummary}
              />
        </div>
        <div className="form-group">
          <label>PostDate: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.PostDate}
              onChange={this.onChangePostDate}
              />
        </div>
        <div className="form-group">
          <label>JobLink: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.JobLink}
              onChange={this.onChangeJobLink}
              />
        </div>
        

        <div className="form-group">
          <input type="submit" value="Create Job" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}
