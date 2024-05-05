// Jobs.js
import React from "react";
import "./style.css";
import MultiSelect from "../MultiSelect";
import filtersData from "../../utils/data";
import JobCard from "../../JobsCard/JobCard";

const data = [
  {
    jdUid: "cfff5a67-053c-11ef-83d3-06301d0a7178-92230",
    jdLink: "https://weekday.works",
    jobDetailsFromCompany:
      "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    maxJdSalary: 63,
    minJdSalary: 35,
    salaryCurrencyCode: "USD",
    location: "delhi ncr",
    minExp: 10,
    maxExp: 14,
    jobRole: "frontend",
    companyName: "Qualcomm",
    logoUrl: "https://logo.clearbit.com/qualcomm.com",
  },
  {
    jdUid: "cfff5a73-053c-11ef-83d3-06301d0a7178-92232",
    jdLink: "https://weekday.works",
    jobDetailsFromCompany:
      "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    maxJdSalary: 67,
    minJdSalary: 41,
    salaryCurrencyCode: "USD",
    location: "mumbai",
    minExp: 8,
    maxExp: 12,
    jobRole: "ios",
    companyName: "Epson",
    logoUrl: "https://logo.clearbit.com/epson.com",
  },
  {
    jdUid: "cfff5a80-053c-11ef-83d3-06301d0a7178-92234",
    jdLink: "https://weekday.works",
    jobDetailsFromCompany:
      "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    maxJdSalary: 103,
    minJdSalary: 98,
    salaryCurrencyCode: "USD",
    location: "bangalore",
    minExp: 8,
    maxExp: 11,
    jobRole: "backend",
    companyName: "Alibaba",
    logoUrl: "https://logo.clearbit.com/alibaba.com",
  },
  {
    jdUid: "cfff5a8d-053c-11ef-83d3-06301d0a7178-92236",
    jdLink: "https://weekday.works",
    jobDetailsFromCompany:
      "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    maxJdSalary: 86,
    minJdSalary: 57,
    salaryCurrencyCode: "USD",
    location: "remote",
    minExp: 5,
    maxExp: 14,
    jobRole: "android",
    companyName: "Airbnb",
    logoUrl: "https://logo.clearbit.com/airbnb.com",
  },
];

const Jobs = () => {
  return (
    <div className="jobsContainer">
      <div className="searchJobs">
        <p>Search jobs</p>
      </div>

      <div className="filtersContainer">
        {filtersData.map((filter, index) => (
          <div className="filterContainer" key={index}>
            <MultiSelect
              data={filter.menuItems}
              placeholder={filter.placeholder}
              multi={filter.multi}
              categorized={filter.categorized}
              width={filter.width}
            />
          </div>
        ))}
      </div>
      <div className="jobContainer">
        {data.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </div>
    </div>
  );
};

export default Jobs;
