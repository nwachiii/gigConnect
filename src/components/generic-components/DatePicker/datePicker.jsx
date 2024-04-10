import { Select } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { HiOutlineChevronDown } from "react-icons/hi2";
export const CustomDatePicker = ({ view, minDate, maxDate }) => {
  const [values, setValues] = useState([]);
  useEffect(() => {
    switch (view) {
      case "month":
        setValues(months);
      case "year":
        let years = [];

        for (let year = 1924; year <= new Date().getFullYear(); year++) {
          years.push(year);
        }
        setValues(years);
    }
  }, [view]);

  return (
    <Select placeholder={view === "month" ? 'Month' : 'Year'} icon={<HiOutlineChevronDown color="#4C5361" size={25} />} required>
      {values.map((value, index) => {
        return (
          <option key={index} value={view === "month" ? index : value}>
            {value}
          </option>
        );
      })}
    </Select>
  );
};

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
