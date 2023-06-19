import { useParams } from "react-router-dom";
import Header from "../components/pokedex/Header";
import { useEffect, useState } from "react";
import axios from "axios";

const pokeLinearGradients = {
  normal: "bg-gradient-to-t from-[#7C3F4C] via-[#BC6B7C] to-[#735259]",

  fighting: "bg-gradient-to-t from-[#CB735D] via-[#F1613C] to-[#96402A]",

  flying: "bg-gradient-to-t from-slate-50 via-purple-400 to-yellow-400",

  poison: "bg-gradient-to-t from-[#CE9BFF] via-[#A564E3] to-[#5B3184]",

  ground: "bg-gradient-to-t from-[#D69638] via-[#895C1A] to-[#654008]",

  rock: "bg-gradient-to-t from-[#D3D3D3] via-[#8D8D94] to-[#7E7E7E]",

  bug: "bg-gradient-to-t from-[#AAFFA8] via-[#3BB039] to-[#62DB60]",

  ghost: "bg-gradient-to-t from-[#787DDA] via-[#454AA8] to-[#323569]",

  steel: "bg-gradient-to-t from-[#A8A8A8] via-[#728881] to-[#5E736C]",

  fire: "bg-gradient-to-t from-[#E8AE1B] via-[#E35825] to-[#F96D6F]",

  water: "bg-gradient-to-t from-[#82B2F1] via-[#1479FB] to-[#133258]",

  grass: "bg-gradient-to-t from-[#CAE099] via-[#ABDAC6] to-[#7EC6C5]",

  electric: "bg-gradient-to-t from-yellow-200 to-yellow-500",

  psychic: "bg-gradient-to-b from-lime-800 via-lime-600 to-slate-100",

  ice: "bg-gradient-to-t from-[#BDEBFE] via-[#64CBF5] to-[#6FBEDF]",

  dragon: "bg-gradient-to-t from-[#A2BEC1] via-[#56A4AE] to-[#A2BEC1]",

  dark: "bg-gradient-to-t from-[#5A5E5D] via-[#0D1211] to-[#030706]",

  fairy: "bg-gradient-to-t from-[#CD7D98] via-[#C23867] to-[#971B45]",

  unknown: "bg-gradient-to-t from-slate-500 via-purple-400 to-slate-800",

  shadow: "bg-gradient-to-t from-[#5A5E5D] via-[#0D1211] to-[#030706]",
};

const PokemonId = () => {
  const [pokemon, setPokemon] = useState(null);
  console.log(pokemon);
  const { pokemonName } = useParams();

  const percentPorgressStat = (baseStat) => {
    const STAT_MAX = 255;
    return `${(baseStat * 100) / STAT_MAX}%`;
  };

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`;
    console.log(URL);

    axios
      .get(URL)
      .then(({ data }) => setPokemon(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main>
      <Header />

      <section className="mx-[80px] my-[180px]">
        {/*  Informacion detalle de pokemon */}

        {/* Gradiant and image */}
        <section
          className={`relative h-36 ${
            pokeLinearGradients[pokemon?.types[0].type.name]
          }`}
        >
          <div className="absolute px-12 left-1/2 -translate-x-1/2 -bottom-4">
            <img
              className="max-h-[314px]"
              src={pokemon?.sprites.other["official-artwork"].front_default}
              alt={pokemon?.name}
            />
          </div>
        </section>
        {/* pokemon id  */}
   
            <div className="mt-6 flex justify-center items-center">
              <h2 className="text-center text-3xl mt-8 inline pt-2 px-4 border-2  border-gray-300 ">#{pokemon?.id}</h2>
            </div>
       

        {/* pokemn name   */}
        <h2 className="text-center pt-4 text-4xl capitalize">{pokemon?.name}</h2>

        {/*   height, weight */}

        <section className="flex justify-center gap-12 pt-6">
          <div>
            <h4 className="font-medium">Height</h4>
            <p className="font-bold text-center">{pokemon?.height}</p>
          </div>

          <div>
            <h4 className="font-medium">Weight</h4>
            <p className="font-bold text-center">{pokemon?.weight}</p>
          </div>
        </section>

        <article>
          {/* stats */}
          <div>
            <p className="font-semibold text-3xl">Stats</p>{" "}
            <hr className="w-20 flex justify-end" />
          </div>
          <section className="mt-8">
            {pokemon?.stats.map((stat) => (
              <article
                className="font-bold grid gap-2 mt-2"
                key={stat.stat.url}
              >
                <section className="flex justify-between px-4">
                  <h5>{stat?.stat.name.toUpperCase()}:</h5>
                  <span>{stat?.base_stat}</span>
                </section>

                {/* barra de progeso de stat */}
                <div className="bg-gray-300 h-8 overflow-hidden rounded-md">
                  <div
                    style={{ width: percentPorgressStat(stat.base_stat) }}
                    className={`h-full bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-700 `}
                  ></div>
                </div>
              </article>
            ))}
          </section>
        </article>
      </section>
    </main>
  );
};
export default PokemonId;
