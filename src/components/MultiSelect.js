import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import { IoCloseSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import Autocomplete, { autocompleteClasses } from "@mui/material/Autocomplete";

const MultiSelect = ({ data, multi, categorized, placeholder, width }) => {
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
      {areValuesSelected && <p>{placeholder}</p>}
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
          setSelectedValues(newValue);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder={areValuesSelected ? "" : placeholder}
          />
        )}
        sx={{
          minWidth: width,
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
  );
};

export default MultiSelect;
