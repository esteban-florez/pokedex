import fetchData from './utils/fetchData.js'
import pokemonSmallCard from './templates/pokemon-sm-card.js'

const API_URL = 'https://pokeapi.co/api/v2'
const LIMIT_PER_PAGE = 24

const grid = document.querySelector('div#pokemonGrid')
const loading = document.querySelector('div#loading')
const galery = document.querySelector('section#pokemonGalery')
const main = document.querySelector('main')
const urls = {}

const buttons = [
  document.querySelector('button#previous'),
  document.querySelector('button#next')
]

buttons.forEach(button => {
  button.addEventListener('click', () => updateGalery(urls[button.id]))
})

updateGalery(`${API_URL}/pokemon?limit=${LIMIT_PER_PAGE}`)

async function updateGalery(url) {
  galery.style.setProperty('display', 'none')
  main.append(loading)

  const { results, next, previous } = await fetchData(url)

  urls.next = next
  urls.previous = previous

  buttons.forEach(button => {
    if (urls[button.id]) {
      button.removeAttribute('disabled')
      return
    }

    button.setAttribute('disabled', '')
  })
  
  const promises = results.map(pkmn => fetchData(pkmn.url))
  const pokemons = await Promise.all(promises)

  const cardsReducer = (html, pokemon) => html + pokemonSmallCard(pokemon)
  const cardsHTML = pokemons.reduce(cardsReducer, '')

  grid.innerHTML = cardsHTML

  loading.remove()
  galery.style.removeProperty('display')
}
