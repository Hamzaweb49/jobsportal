import React from "react";
import "./rightbar.scss";


const Rightbar = () => {
  return (
    <div className="rightbar">
        <div className="container">
        <div className="item">
          <div className="itemHeading">
          <p>Time</p>
          <span>Clear</span>
          </div>
          <div className="job">
            <div className="jobInfo">  
              <input type="checkbox" />
              <span>Today</span>
            </div>
            <div className="totalJobs">
                <span>300+</span>
            </div>
          </div>
          <div className="job">
            <div className="jobInfo">  
            <input type="checkbox" />
              <span>This Week</span>
            </div>
            <div className="totalJobs">
                <span>400+</span>
            </div>
          </div>
          <div className="job">
            <div className="jobInfo">  
            <input type="checkbox" />
              <span>This Month</span>
            </div>
            <div className="totalJobs">
                <span>600+</span>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="itemHeading">
          <p>Experience Level</p>
          <span>Clear</span>
          </div>
          <div className="job">
            <div className="jobInfo">  
              <input type="checkbox" />
              <span>Trainee Level</span>
            </div>
            <div className="totalJobs">
                <span>100+</span>
            </div>
          </div>
          <div className="job">
            <div className="jobInfo">  
            <input type="checkbox" />
              <span>Junior Level</span>
            </div>
            <div className="totalJobs">
                <span>200+</span>
            </div>
          </div>
          <div className="job">
            <div className="jobInfo">  
            <input type="checkbox" />
              <span>Middle Level</span>
            </div>
            <div className="totalJobs">
                <span>250+</span>
            </div>
          </div>
          <div className="job">
            <div className="jobInfo">  
            <input type="checkbox" />
              <span>Senior Level</span>
            </div>
            <div className="totalJobs">
                <span>300+</span>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="itemHeading">
          <p>Job Type</p>
          <span>Clear</span>
          </div>
          <div className="job">
            <div className="jobInfo">  
              <input type="checkbox" />
              <span>Full Time</span>
            </div>
            <div className="totalJobs">
                <span>200+</span>
            </div>
          </div>
          <div className="job">
            <div className="jobInfo">  
            <input type="checkbox" />
              <span>Part Time</span>
            </div>
            <div className="totalJobs">
                <span>150+</span>
            </div>
          </div>
          <div className="job">
            <div className="jobInfo">  
            <input type="checkbox" />
              <span>Freelance</span>
            </div>
            <div className="totalJobs">
                <span>300+</span>
            </div>
          </div>
          <div className="job">
            <div className="jobInfo">  
            <input type="checkbox" />
              <span>Intern</span>
            </div>
            <div className="totalJobs">
                <span>100+</span>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="itemHeading">
          <p>Job Location</p>
          <span>Clear</span>
          </div>
          <div className="job">
            <div className="jobInfo">  
              <input type="checkbox" />
              <span>On site</span>
            </div>
            <div className="totalJobs">
                <span>400+</span>
            </div>
          </div>
          
          <div className="job">
            <div className="jobInfo">  
            <input type="checkbox" />
              <span>Remote</span>
            </div>
            <div className="totalJobs">
                <span>300+</span>
            </div>
          </div>
        </div>
        </div>
    </div>
  );
};

export default Rightbar;
