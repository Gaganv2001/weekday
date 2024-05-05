import React, { useEffect, useRef } from "react";
import "./style.css";
import MultiSelect from "../MultiSelect";
import filtersData from "../../utils/data";
import JobCard from "../../JobsCard/JobCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../../redux/slicer/jobSlice";

const Jobs = () => {
  const dispatch = useDispatch();
  const { data, isLoading, isError, pagination, totalCount } = useSelector(
    (state) => state.job
  );

  // Ref to the container element
  const elementRef = useRef(null); // Ref to the Intersection Observer instance

  useEffect(() => {
    if (pagination.offset < totalCount || totalCount === 0) {
      dispatch(
        fetchJobs({ limit: pagination.limit, offset: pagination.offset })
      );
    }
  }, []);

  function onIntersection(entries) {
    const firstEntry = entries[0];
    if (firstEntry.isIntersecting && pagination.offset < totalCount) {
      dispatch(
        fetchJobs({
          limit: pagination.limit,
          offset: pagination.offset + pagination.limit,
        })
      );
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersection);
    if (observer && elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [data]);

  if (isLoading && !data.length) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Error fetching jobs</h1>;
  }

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
              filterKey={filter.filterKey}
            />
          </div>
        ))}
      </div>
      {data.length === 0 ? (
        <div>No jobs available</div>
      ) : (
        <div className="jobContainer">
          {data.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </div>
      )}
      {pagination.offset < totalCount && ( // Only render the bottom loading if there are more jobs to fetch
        <div ref={elementRef}>Loading</div>
      )}
    </div>
  );
};
export default Jobs;
