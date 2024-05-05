import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import { IoCloseSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import Autocomplete, { autocompleteClasses } from "@mui/material/Autocomplete";
import { useDispatch, useSelector } from "react-redux";
import { updateSelectedFilters } from "../redux/slicer/jobSlice";

const MultiSelect = ({
  data,
  multi,
  categorized,
  placeholder,
  width,
  filterKey,
}) => {
  const dispatch = useDispatch();
  const [selectedValues, setSelectedValues] = useState(multi ? [] : null);

  let options;
  if (categorized) {
    options = data.map((option) => {
      const firstLetter = option.category[0].toUpperCase();
      return {
        firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
        ...option,
      };
    });
  } else {
    options = data;
  }

  const areValuesSelected = multi
    ? selectedValues.length > 0
    : selectedValues !== null;


  return (
    <div>
      {areValuesSelected && (
        <p style={{ margin: 2, textAlign: "left" }}>{placeholder}</p>
      )}
      <Autocomplete
        popupIcon={
          <div
            style={{
              borderLeft: "2px solid #D3D3D3",
              paddingLeft: "10px",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <IoIosArrowDown color="#D3D3D3" />
          </div>
        }
        multiple={multi}
        id="size-small-outlined-multi"
        size="small"
        options={options}
        groupBy={(option) => option.category}
        getOptionLabel={(option) => option.title}
        value={selectedValues}
        onChange={(event, newValue) => {
          // Check if newValue is truthy before processing
          if (newValue) {
            // Check if the Autocomplete is multi-select
            if (multi) {
              // For multi-select Autocomplete, newValue will always be an array
              const selectedValues = newValue.map((option) => option.value);
              setSelectedValues(newValue);
              // Call the updateSelectedFilters action with the extracted selected values
              dispatch(
                updateSelectedFilters({ filterKey: filterKey, selectedValues })
              );
            } else {
              // For single-select Autocomplete, newValue can be a single value or null
              setSelectedValues(newValue);
              // Call the updateSelectedFilters action with the selected value
              dispatch(
                updateSelectedFilters({
                  filterKey: filterKey,
                  selectedValues: newValue.value,
                })
              );
            }
          } else {
            // Handle the case when no value is selected
            setSelectedValues(multi ? [] : null);
          }
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder={areValuesSelected ? "" : placeholder}
            size="small"
          />
        )}
        sx={{
          minWidth: width,
          [`& .${autocompleteClasses.input}`]: {
            height: 30, // Set your desired height here
          },

          [`& .${autocompleteClasses.popupIndicator}`]: {
            transform: "none",
          },
        }}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip
              key={index}
              label={option.title}
              {...getTagProps({ index })}
              style={{
                backgroundColor: "#E6E6E6",
                color: "black",

                borderRadius: 4,
              }}
              classes={{ label: "chipLabel" }}
              deleteIcon={<IoCloseSharp color="black" />}
            />
          ))
        }
      />
    </div>
  );
};

export default MultiSelect;
