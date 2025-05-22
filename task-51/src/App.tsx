import './App.css'
import Ball from './Ball/Ball.tsx';
import {useState} from "react";

const App = () => {
  const [numbers, setNumbers] = useState([
    {number: 5},
    {number: 11},
    {number: 16},
    {number: 23},
    {number: 32},
  ]);

  const changeNumbers = (min: number, max: number, count = 5) => {
    const uniqueNumbers: number[] = [];

    while (uniqueNumbers.length < count) {
      const generatedNumber: number = Math.floor(Math.random() * (max - min + 1)) + min;

      if (!uniqueNumbers.includes(generatedNumber)) {
        uniqueNumbers.push(generatedNumber);
      }
    }

    const sortedNumbers: number[] = uniqueNumbers.sort((a, b) => a - b);

    setNumbers(sortedNumbers.map(number => ({number})))
  };

  return (
      <>
        <div>
          <button type='button' onClick={() => changeNumbers(5, 36)}>New numbers</button>
        </div>
          <Ball number={numbers[0].number} />
          <Ball number={numbers[1].number} />
          <Ball number={numbers[2].number} />
          <Ball number={numbers[3].number} />
          <Ball number={numbers[4].number} />
      </>
  )
}

export default App
