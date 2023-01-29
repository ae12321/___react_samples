import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card/Card';
import Navbar from './components/Navbar/Navbar';
import { getAllPokemon, getPokemon } from './utils/pokemon';

function App() {
  const initialURL = 'https://pokeapi.co/api/v2/pokemon';

  const [loading, setLoading] = useState(true);

  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const fetchPokemonData = async () => {
      // all pokemon data
      const res = await getAllPokemon(initialURL);

      // detail data
      // res = {count: number; next: string(url); previous: ?; results: [{ name: string; url: string(url) }]}
      loadPokemon(res.results);

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

  console.log(pokemonData);

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
          </>
        )}
      </div>
    </>
  );
}

export default App;
