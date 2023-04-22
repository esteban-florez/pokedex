export const pokemonSmallCard = (id, image) => `<a href="#pokemon-${id}">
  <div class="flex max-w-xs lg:max-w-md mx-auto bg-green-500 rounded-xl shadow-md relative">
    <div class="bg-white bg-opacity-50 p-4">
      <img class="w-16 h-16" src="${image}" alt="Pokémon Image">
    </div>    
    <div class="pl-4 py-2 grow flex flex-col justify-between items-start">
      <div>
        <h3 class="font-bold text-white text-2xl">
          Bulbasaur
        </h3>
        <h5 class="font-semibold text-green-900 text-sm -mt-2">
          Grass/Poison
        </h5>
      </div>
      <p class="bg-white text-green-700 font-bold rounded-lg px-2">Generation I</p>
    </div>
  </div>
</a>`