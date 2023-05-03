import fetchData from './utils/fetchData.js'
import pokemonSmallCard from './templates/pokemon-sm-card.js'

const API_URL = 'https://pokeapi.co/api/v2'
const LIMIT_PER_PAGE = 24

const { results } = await fetchData(`${API_URL}/pokemon?limit=${LIMIT_PER_PAGE}`)

const promises = results.map(pkmn => fetchData(pkmn.url))
const pokemons = await Promise.all(promises)
// console.log(pokemons[0])

const cardsReducer = (html, pokemon) => html + pokemonSmallCard(pokemon)
const cardsHTML = pokemons.reduce(cardsReducer, '')

document.querySelector('#pokemonGalery').innerHTML = cardsHTML