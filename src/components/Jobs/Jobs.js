import React, { useEffect, useRef } from "react";
import "./style.css";
import MultiSelect from "../MultiSelect";
import filtersData from "../../utils/data";
import JobCard from "../../JobsCard/JobCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../../redux/slicer/jobSlice";

const Jobs = () => {
  const dispatch = useDispatch();
  const { data, isLoading, isError, pagination } = useSelector(
    (state) => state.job
  );

  const containerRef = useRef(null); // Ref to the container element
  const observer = useRef(null); // Ref to the Intersection Observer instance

  useEffect(() => {
    // Fetch initial data
    dispatch(fetchJobs({ limit: pagination.limit, offset: pagination.offset }));
  }, [dispatch]);

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !isLoading && data.length < pagination.total) {
        // If the container is visible, not loading, and there's more data to fetch
        dispatch(fetchJobs({ limit: pagination.limit, offset: data.length }));
      }
    });
  };

  useEffect(() => {
    if (containerRef.current) {
      observer.current = new IntersectionObserver(handleIntersection, {
        root: null,
        rootMargin: "0px",
        threshold: 1.0, // When the container is fully visible
      });

      observer.current.observe(containerRef.current);

      return () => {
        if (observer.current) {
          observer.current.disconnect();
        }
      };
    }
  }, [ handleIntersection]);



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
            />
          </div>
        ))}
      </div>
      <div className="jobContainer" ref={containerRef}>
        {data.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </div>
    </div>
  );
};

export default Jobs;
