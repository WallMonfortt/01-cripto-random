import { useState, useEffect, useReducer } from 'react'
import './App.css'

const getRandomNumberFromApi = async (): Promise<number> => {
  const resp = await fetch('https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new');
  const numberString = await resp.text();
  // throw new Error('Error de prueba');
  return +numberString;
}

const App = () => {
  const [number, setNumber] = useState<number>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>();
  const [key, forceReferch] = useReducer((x) => x + 1, 0) // forceReferch es una función que al ejecutarse incrementa el valor de key en 1

  useEffect(() => {
    // getRandomNumberFromApi().then( number => setNumber(number) )
    setIsLoading(true);
    getRandomNumberFromApi().then( setNumber ).catch( error => setError(error.message) ).finally( () => setIsLoading(false) )
  }, [key])

  useEffect(() => {
    if (number) {
      setIsLoading(false);
    }
  }, [number])
  

  return (
    <div className="App App-header">
      {
        isLoading 
        ? <h2>Loading...</h2> 
        : <h2>Num aleatorio: {number}</h2>
      }
      {
        !isLoading && error && <h2>{error}</h2>
      }

      <button onClick={forceReferch} disabled= {isLoading} >{isLoading ? '...' : 'Refrescar numero'}</button>
      
    </div>
  );
}

export default App


