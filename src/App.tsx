
import './App.css';
import { useRandom } from './hooks/useRandom';


const App = () => {

  const query = useRandom();

  return (
    <div className="App App-header">
      {
        query.isFetching 
        ? <h2>Loading...</h2> 
        : <h2>Num aleatorio: {query.data}</h2>
      }
      {
        !query.isLoading && query.isError && <h2>{`${query.error}`}</h2>
      }

      <button onClick={() => query.refetch()} disabled= {query.isFetching} >{query.isFetching ? '...' : 'Refrescar numero'}</button>
      
    </div>
  );
}

export default App


