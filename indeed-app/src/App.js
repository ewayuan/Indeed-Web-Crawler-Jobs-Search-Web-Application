import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import JobList from "./components/jobs-list.component";
import CreateJob from "./components/create-job.component";
import EditJob from "./components/edit-job.component";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={JobList} />
      <Route path="/edit/:id" component={EditJob} />
      <Route path="/create" component={CreateJob} />
      </div>
    </Router>
  );
}

export default App;
