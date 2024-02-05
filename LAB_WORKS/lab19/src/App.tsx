import "./App.css";
import Accordion from "./Components/Acardion/Accordion.tsx";
import { AccordionData } from "./Components/AccordionData/AccordionData.tsx";
import styles from "./Components/Acardion/accordion.module.css";

function App() {
  return (
    <>
      <div className={styles.main_box}>
        {AccordionData.map((item) => (
          <Accordion key={item.id} title={item.title} desc={item.desc} />
        ))}
      </div>
    </>
  );
}

export default App;
