import { useSelector } from "react-redux";
import Header from "../components/pokedex/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import PokemonsList from "../components/pokedex/PokemonsList";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const nameTrainer = useSelector((store) => store.nameTrainer);
  const [namePokemon, setNamePokemon] = useState("");

  const [types, setTypes] = useState([]);

  const [currentType, setCurrentType] = useState("")

console.log(currentType)

  const pokemonsByName = pokemons.filter((pokemon) =>
    pokemon.name.includes(namePokemon.toLowerCase().trim())
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setNamePokemon(e.target.namePokemon.value);
  };

  const handleChangeType = (e) => {
    setCurrentType(e.target.value)
  }

  useEffect(() => {
    
    if(!currentType){

      const URL = "https://pokeapi.co/api/v2/pokemon?limit=40";

      axios
        .get(URL)
        .then(({ data }) => setPokemons(data.results))
        .catch((err) => console.log(err));

    }
  
  }, [currentType]);

  useEffect(() => {
    const URL = "https://pokeapi.co/api/v2/type";

    axios
      .get(URL)
      .then(({ data }) => setTypes(data.results))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if(currentType){
    const URL= `https://pokeapi.co/api/v2/type/${currentType}`

    axios
    .get(URL)
    .then(({ data }) => {
      
        const pokemonsByType = data.pokemon.map(pokemon =>pokemon.pokemon)
        setPokemons(pokemonsByType)
    
    })
    .catch((err) => console.log(err));

    }

  }, [currentType])
  



  return (
    <main>
      <Header />
      <p className="mt-6 pl-2 text-[#FE1936] font-bold">
        Welcome {nameTrainer},
        <label className="text-black font-normal"> here, you can find your favorite Pokemon</label>
      </p>
    
       <form onSubmit={handleSubmit} className="mdd:flex mdd:justify-center mdd:gap-9 mdd:p-0">
        <div className="py-4 flex justify-center">
          <input className=" drop-shadow-xl py-2 px-2 mdd:w-80"
            id="namePokemon"
            placeholder="type a name pokemon..."
            type="text"
          />
          <button className="bg-[#D93F3F] text-white p-2 ">Search</button>
        </div>

        <select onChange={handleChangeType} className="outline-none mdd:w-[211px] px-2">
          <option value="">All</option>
          {types.map((type) => (
            <option value={type.name} key={type.url}> {type.name}</option>
          ))}
        </select>
      </form>

     

      <PokemonsList pokemons={pokemonsByName} />
    </main>
  );
};
export default Pokedex;
