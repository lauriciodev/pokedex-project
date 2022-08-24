const pokemonName = document.querySelector(".pokemon__name");
const pokemonNumber = document.querySelector(".pokemon__number");
const pokemonImg = document.querySelector(".pokemon");
const form = document.querySelector(".form");
const input = document.querySelector(".input__search");
const btnPrev = document.querySelector(".btn__prev");
const btnProx = document.querySelector(".btn__next");
let count = 1;

const fetchPokemon = async (pokemon) => {
  const apiRes = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

  if (apiRes.status === 200) {
    const data = await apiRes.json();
    return data;
  }

 
};


const renderPokemon = async (pokemon) => {
  pokemonName.innerHTML =  "Buscando..."
  pokemonNumber.innerHTML = ""
  input.value = ""

  const data = await fetchPokemon(pokemon);

   if(data){
    pokemonImg.style.display = "block" 
    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;
    pokemonImg.src = data["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"];

    input.value = ""
    count = data.id

   }else{
    pokemonImg.style.display = "none" 
    pokemonName.innerHTML = "não encontrado"
    pokemonNumber =  ""
   }
  

};



form.addEventListener("submit", (event) =>{
 event.preventDefault();
 renderPokemon(input.value.toLowerCase())
})


btnProx.addEventListener("click", () =>{
  renderPokemon(count += 1)

 });

btnPrev.addEventListener("click", () =>{
  if (count > 1) {
  renderPokemon(count -= 1)
  }
 });


renderPokemon(count)

