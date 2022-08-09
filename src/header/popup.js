import React, { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
// import { DateRangePicker } from "react-date-range";
import { DateRange } from "react-date-range";
import dateFormat, { masks } from "dateformat";

const Popup = (props) => {
  const handleSelect = (ranges) => {
    // console.log(ranges);
    // console.log(ranges.selection);
    // console.log(ranges.selection.startDate);
    // console.log(ranges.selection.endDate);

    masks.hammerTime = "dd/mm/yyyy";
    let now = ranges.selection.startDate;
    let then = ranges.selection.endDate;
    let comeback = `${dateFormat(now, "hammerTime")} to ${dateFormat(
      then,
      "hammerTime"
    )} `;
    // console.log(dateFormat(now, "hammerTime"));
    console.log(comeback);
    console.log(typeof comeback);

    props.ngay(comeback);
  };

  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  };
  return <DateRange ranges={[selectionRange]} onChange={handleSelect} />;
};

export default Popup;
