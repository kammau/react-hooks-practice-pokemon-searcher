import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemon, setPokemon] = useState([]);
  const [searchFor, setSearchFor] = useState("");
  //const [newPokemon, setNewPokemon] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then((res) => res.json())
    .then((pokemonData) => setPokemon(pokemonData))
  }, [])

  const pokemonToDisplay = pokemon.filter((p) => {
    return p.name.toLowerCase().includes(searchFor.toLowerCase())
  })

  function handlePokemonAdd(pokemonData) {
    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: pokemonData.name,
        hp: pokemonData.hp,
        sprites: {
          front: pokemonData.sprites.frontImg,
          back: pokemonData.sprites.backImg
        }
      })
    })
    .then((res) => res.json())
    .then(setPokemon([...pokemon, pokemonData]))
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onNewPokemon={handlePokemonAdd}/>
      <br />
      <Search searchFor={searchFor} onSearchChange={setSearchFor}/>
      <br />
      <PokemonCollection pokemon={pokemonToDisplay}/>
    </Container>
  );
}

export default PokemonPage;
