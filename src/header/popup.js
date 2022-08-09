import React, { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
// import { DateRangePicker } from "react-date-range";
import { DateRange } from "react-date-range";
class Popup extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }
  handleSelect(ranges) {
    console.log(ranges);
    console.log(ranges.selection);
    console.log(ranges.selection.startDate);
    console.log(ranges.selection.endDate);
    // {
    //   selection: {
    //     startDate: [native Date Object],
    //     endDate: [native Date Object],
    //   }
    // }
    // this.props.ngay(ranges.toString());
  }
  render() {
    const selectionRange = {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    };
    return <DateRange ranges={[selectionRange]} onChange={this.handleSelect} />;
  }
}

export default Popup;
