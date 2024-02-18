import React, { useState } from 'react';
import style from './App.module.css';
import AgeCalculator from './ageCalculator/ageCalculator.tsx';
import ResultCalculator from './resultCalculator/resultCalculator.tsx';
import { createContext } from 'react';

function App() {
  const [days, setDays] = useState("");
  const [month, setMonth] = useState("");
  const [years, setYears] = useState("");

  const ApiContext  = createContext(null);

  return (
    <div className={style.age_calculator}>
      <ApiContext.Provider value={days,month,years}>
        <AgeCalculator
          days={days}
          setDays={setDays}
          month={month}
          setMonth={setMonth}
          years={years}
          setYears={setYears}
        />
        <ResultCalculator years={years} month={month} days={days} />
      </ApiContext.Provider>
    </div>
  );
}

export default App;