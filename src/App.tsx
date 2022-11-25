import { useState, useEffect } from 'react'
import './App.css'

const getRandomNumberFromApi = async (): Promise<number> => {
  const resp = await fetch('https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new');
  const numberString = await resp.text();
  return +numberString;
}

const App = () => {
  const [number, setNumber] = useState<number>()

  useEffect(() => {
    getRandomNumberFromApi().then( number => setNumber(number) )
  }, [])
  

  return (
    <div className="App App-header">
      <h2>Num aleatorio: {number}</h2>
    </div>
  );
}

export default App


