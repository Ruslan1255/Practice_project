import React from "react";
import {
  differenceInDays,
  differenceInMonths,
  differenceInYears,
} from "date-fns";
import style from "./resultCalculator.module.css";

const ResultCalculator = ({ years, month, days }) => {
  const currentDate = new Date();
  const birthDate = new Date(years, month - 1, days); // Months in JavaScript are 0-indexed, so subtract 1 from the month

  const diffInDays = differenceInDays(currentDate, birthDate);
  const diffInMonths = differenceInMonths(currentDate, birthDate);
  const diffInYears = differenceInYears(currentDate, birthDate);

  return (
    <div className={style.calculator_time}>
      <div className={style.calculator_time_day}>
        <span>{diffInDays}</span> days
      </div>
      <div className={style.calculator_time_month}>
        <span>{diffInMonths}</span> months
      </div>
      <div className={style.calculator_time_year}>
        <span>{diffInYears}</span> years
      </div>
    </div>
  );
};

export default ResultCalculator;
