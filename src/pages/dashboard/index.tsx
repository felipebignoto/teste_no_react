import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { PokemonType } from "../../types/PokemonType";

interface Iprops {
  fetchPokemonList: () => Promise<PokemonType[]>
}


export default function Dashboard({fetchPokemonList}:Iprops) {
  const [pokemons, setPokemons] = useState<PokemonType[]>([])

  useEffect(() => {
    (async () => {
      const data = await fetchPokemonList()
      setPokemons(data)
    })()
  },[])
  
  return (
    <div className={styles.container}>
      <h1>Dashboard</h1>

      <ul className={styles["container-pokemons"]}>
        {pokemons.map((pokemon) => (
          <li key={pokemon.id} >
            <h1>{pokemon.name}</h1>
            <img src={pokemon.image} alt={pokemon.name} />
            <strong>{pokemon.type}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
