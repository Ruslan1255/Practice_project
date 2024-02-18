import React, { useState } from 'react';
import { FaArrowDown } from 'react-icons/fa';
import styles from './ageCalculator.module.css';

const AgeCalculator = ({ days, setDays, month, setMonth, years, setYears }) => {
  return (
    <div className={styles.calculator_input}>
      <div className={styles.calculator_input_box}>
        <div className={styles.calculator_input_box_item}>
          <h5>DAY</h5>
          <input
            type="number"
            className={styles.calculator_item_input}
            value={days}
            onChange={(e) => setDays(e.target.value)}
            min="1"
            max="31"
            placeholder="DD"
          />
        </div>
        <div className={styles.calculator_input_box_item}>
          <h5>MONTH</h5>
          <input
            type="number"
            className={styles.calculator_item_input}
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            min="1"
            max="12"
            placeholder="MM"
          />
        </div>
        <div className={styles.calculator_input_box_item}>
          <h5>YEAR</h5>
          <input
            type="number"
            className={styles.calculator_item_input}
            value={years}
            onChange={(e) => setYears(e.target.value)}
            min="1900"
            max="2024"
            placeholder="YYYY"
          />
        </div>
      </div>
      <div className={styles.calculator_input_box_bottom}>
        <div className={styles.calculator_input_box_bottom_item}></div>
        <div className={styles.calculator_icon_box}>
          <FaArrowDown className={styles.calculator_icon} />
        </div>
      </div>
    </div>
  );
};

export default AgeCalculator;