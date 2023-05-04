import capitalizeWord from '../utils/capitalizeWord.js'
import colorsByType from './colorsByType.js'

function formatTypes(types) {
  let result = capitalizeWord(types[0].type.name)

  return types.length === 1
    ? result
    : `${result}/${capitalizeWord(types[1].type.name)}`
}

export default function pokemonSmallCard({ id, sprites, name, types }) {
  const image = sprites.other['official-artwork'].front_default
  const { bgColor, typesColor, genColor } = colorsByType(types[0].type.name)

  return `<a href="#pokemon-${id}">
    <div class="${bgColor} flex max-w-xs lg:max-w-md mx-auto rounded-xl shadow-md relative">
      <div class="bg-white bg-opacity-50 p-2">
        <img class="w-20 h-20 p-1 bg-white rounded-full shadow-md" src="${image}" alt="Pokémon Image">
      </div>    
      <div class="pl-4 py-2 grow flex flex-col justify-between items-start">
        <div>
          <h3 class="font-bold text-white text-2xl">
            ${capitalizeWord(name)}
          </h3>
          <h5 class="font-semibold ${typesColor} text-sm -mt-1">
            ${formatTypes(types)}
          </h5>
        </div>
        <p class="bg-white ${genColor} font-bold rounded-lg px-2">Generation I</p>
      </div>
    </div>
  </a>`
}
