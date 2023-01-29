import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card/Card';
import Navbar from './components/Navbar/Navbar';
import { getAllPokemon, getPokemon } from './utils/pokemon';

function App() {
  const initialURL = 'https://pokeapi.co/api/v2/pokemon';

  const [loading, setLoading] = useState(true);

  const [pokemonData, setPokemonData] = useState([]);

  const [nextURL, setNextURL] = useState('');
  const [prevURL, setPrevURL] = useState('');

  useEffect(() => {
    const fetchPokemonData = async () => {
      // all pokemon data
      const res = await getAllPokemon(initialURL);
      console.log(res);

      setNextURL(res.next);
      setPrevURL(res.previous);

      // detail data
      // res = {count: number; next: string(url); previous: ?; results: [{ name: string; url: string(url) }]}
      await loadPokemon(res.results);

      // console.log(res);
      setLoading(false);
    };
    fetchPokemonData();
  }, []);

  const loadPokemon = async (data) => {
    let allDetail = await Promise.all(
      data.map((pokemon) => {
        console.log(pokemon);
        let detail = getPokemon(pokemon.url);
        return detail;
      })
    );
    setPokemonData(allDetail);
  };

  // console.log(pokemonData);

  const handlePrevPage = async () => {
    setLoading(true);
    if (prevURL) {
      const res = await getAllPokemon(prevURL);
      await loadPokemon(res.results);
    }

    setLoading(false);
  };
  const handleNextPage = async () => {
    setLoading(true);
    if (nextURL) {
      const res = await getAllPokemon(nextURL);
      await loadPokemon(res.results);
    }

    setLoading(false);
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="App">
        {loading ? (
          <h1>loading...</h1>
        ) : (
          <>
            <div className="container">
              {pokemonData.map((pokemon, i) => {
                return <Card key={i} pokemon={pokemon}></Card>;
              })}
            </div>

            <div className="btn">
              <button onClick={handlePrevPage}>Prev</button>
              <button onClick={handleNextPage}>Next</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
