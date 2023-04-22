import './style.css'
import './sidebar.js'
import range from './utils/range.js'
import { pokemonSmallCard } from './templates/pokemon-sm-card.js'

const grid = document.querySelector('#pokemonGrid')

for (const index of range(1, 24)) {
  grid.innerHTML += pokemonSmallCard(index)
}
