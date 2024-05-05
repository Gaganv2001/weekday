// Jobs.js
import React from "react";
import "./style.css";
import MultiSelect from "../MultiSelect";
import filtersData from "../../utils/data";

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994, category: "Engineering" },
  { title: "The Godfather", year: 1972, category: "Engineering" },
  { title: "The Godfather: Part II", year: 1974, category: "Engineering" },
  { title: "The Dark Knight", year: 2008, category: "Engineering" },

  { title: "Schindler's List", year: 1993, category: "Engineering" },

  { title: "The Good, the Bad and the Ugly", year: 1966, category: "Sales" },
  { title: "Fight Club", year: 1999, category: "Sales" },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
    category: "Sales",
  },

  { title: "Pulp Fiction", year: 1994, category: "Hr" },
  { title: "12 Angry Men", year: 1957, category: "Sales" },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
    category: "Engineering",
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
    </div>
  );
};

export default Jobs;
