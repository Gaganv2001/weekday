// Jobs.js
import React from "react";
import "./style.css";
import Chip from "@mui/material/Chip";
// import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { IoCloseSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import Autocomplete, { autocompleteClasses } from "@mui/material/Autocomplete";

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
    const options = top100Films.map((option) => {
        const firstLetter = option.category[0].toUpperCase();
        return {
          firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
          ...option,
        };
      });

  return (
    <div className="jobsContainer">
      <div className="searchJobs">
        <p>Search jobs</p>
      </div>

      <div>
        <Autocomplete
          popupIcon={
            <div style={{ borderLeft: "2px solid #D3D3D3", paddingLeft: "10px", alignItems:'center', justifyContent:'center', display:'flex' }}>
              <IoIosArrowDown color="#D3D3D3" />
            </div>
          }
          multiple
          id="size-small-outlined-multi"
          size="small"
        //   options={top100Films}
          options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
          groupBy={(option) => option.category}
          getOptionLabel={(option) => option.title}
          defaultValue={[top100Films[4]]}
          renderInput={(params) => (
            <TextField {...params} placeholder="Category" />
          )}
          sx={{
            width: 300,
            [`& .${autocompleteClasses.popupIndicator}`]: {
              transform: "none"
            }
          }}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip
                label={option.title}
                {...getTagProps({ index })}
                style={{
                  backgroundColor: "#E6E6E6",
                  color: "black",
                  marginRight: 5,
                  borderRadius: 4,
                }}
                classes={{ label: "chipLabel" }}
                deleteIcon={<IoCloseSharp color="black" />}
              />
            ))
          }
        />
      </div>
    </div>
  );
};

export default Jobs;
