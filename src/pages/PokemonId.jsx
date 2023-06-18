import { useParams } from "react-router-dom";
import Header from "../components/pokedex/Header";
import { useEffect, useState } from "react";
import axios from "axios";

const PokemonId = () => {

  const [pokemon, setPokemon] = useState(null)
  const{pokemonName}= useParams()

  const percentPorgressStat=(baseStat) => {
    const STAT_MAX= 255
    return `${(baseStat * 100) /255}%`
  }

useEffect(() => {
  
  const URL= `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`
  console.log(URL)
 
  axios
  .get(URL)
  .then(({ data }) => setPokemon(data))
  .catch((err) => console.log(err));


}, [])

  return (
    <main>
      <Header />

      <section>
        {/*  Informacion detalle de pokemon */}
        <article>
        
        {/* stats */}
        <section>

        {
          pokemon?.stats.map((stat) =>(
            <article key={stat.stat.url}>
              <section>
                <h5>{stat?.stat.name}</h5>
                <span>{stat?.base_stat}</span>
              </section>

              {/* barra de progeso de stat */}
              <div className="bg-gray-300 h-8 overflow-hidden rounded-md">
                <div style={{width: percentPorgressStat(stat.base_stat)}} className={`h-full bg-yellow-500 `} ></div>
              </div>
            </article>
          ))
        }
        </section>
        </article>
      </section>
    </main>
  );
};
export default PokemonId;
