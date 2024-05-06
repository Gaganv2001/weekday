import React from "react";
import "./style.css";
import { IoMdCheckbox } from "react-icons/io";
import { BsFillLightningFill } from "react-icons/bs";
import men from '../assets/images/men.jpeg'
import woman from '../assets/images/woman.jpeg'


const JobCard = ({ job }) => {
  return (
    <div className="cardContainer">
      <div className="jobHeaders">
        <img src={job.logoUrl} alt="Logo" width="50" height="50" />
        <div className="jobDetails">
          <h6>{job.companyName}</h6>
          <p>{job.jobRole}</p>
          <p>{job.location}</p>
        </div>
      </div>
      <div className="Salary">
        <p>
          Estimated Salary: {job.salaryCurrencyCode} {job.minJdSalary || 0}K -{" "}
          {job.maxJdSalary}K
        </p>
        <IoMdCheckbox color="green" />
      </div>
      <div className="about">
        <p>About Company:</p>
        <p style={{ fontWeight: "bold" }}>About Us</p>

        <div className="gradient">
          <p>{job.jobDetailsFromCompany}</p>
        </div>
        <span className="viewMore">View job</span>
      </div>
      <div className="minExp">
        <p style={{ color: "grey", fontWeight: "bold" }}>Minimum Experience</p>
        <p>{job.minExp} Years</p>
      </div>
      <div className="easyApply">
        <BsFillLightningFill color="#FF822D" />
        <p>Easy Apply</p>
      </div>

      <div className="easyApply" style={{backgroundColor:'#4943DA'}}>
        <div className="profileContainer">
        <img src={men} alt="Logo" width="20" height="20" />
        <img src={woman} alt="Logo" width="20" height="20" />

        </div>
        <p style={{color:'white'}}>Unlock referral asks</p>
      </div>
    </div>
  );
};

export default JobCard;
