import React, { useState } from "react";
import styles from "./accordion.module.css";

import { FaArrowDown } from "react-icons/fa";

interface AccordionProps {
  id?: number;
  title: string;
  desc: string;
}

const Accordion: React.FC<AccordionProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className={styles.main_box_item}>
        <div className={styles.main_box_item_header} onClick={toggleAccordion}>
          <div className={styles.main_box_item_header_title}>{props.title}</div>
          <div className={styles.main_box_item_header_btn}>
            <FaArrowDown className={styles.icon} onClick={toggleAccordion} />
          </div>
        </div>

        <div
          className={`${styles.main_box_item_content} ${
            isOpen ? styles.active : ""
          }`}
        >
          {props.desc}
        </div>
      </div>
    </>
  );
};

export default Accordion;
