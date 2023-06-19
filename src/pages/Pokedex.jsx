import { useSelector } from "react-redux";
import Header from "../components/pokedex/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import PokemonsList from "../components/pokedex/PokemonsList";
import './styles/CardHover.css'

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
    <main className="">
      <Header />
        <div className='min-w-[100%] lgg:pt-6 text-center mdd:text-center p-2 flex justify-center max-w-[1024px]'>
        <p className="mt-6 text-[#FE1936] font-bold">
        Welcome {nameTrainer}!
        <label className="text-black font-normal"> Here, you can find your favorite Pokemon.</label>
      </p>
        </div>
    
       <form onSubmit={handleSubmit} className="mdd:flex flex flex-col items-center gap-2 mdd:justify-center mdd:gap-3 mdd:py-4 lgg:flex lgg:flex-row lgg:justify-around max-w-[1024px] mx-auto">
        <div className="py-4 ">
          <input className="drop-shadow-md outline-none py-2 px-2 mdd:w-96 mdd:h-[48px]"
            id="namePokemon"
            placeholder="Type a pokemon name..."
            type="text"
          />
          <button className="bg-[#D93F3F] hover:bg-[#e40f0f] hover:font-semibold text-white p-2 mdd:p-3">Search</button>
        </div>

        <select onChange={handleChangeType} className="outline-none drop-shadow-md w-[250px] mdd:w-[400px] py-2 px-2 lgg:py-3 lgg:h-[48px]">
          <option value="">All pokemons</option>
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
