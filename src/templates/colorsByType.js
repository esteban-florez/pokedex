export const COLORS = {
  normal: {
    bgColor: 'bg-zinc-400',
    typesColor: 'text-zinc-200',
    genColor: 'text-zinc-600',
  },
  fighting: {
    bgColor: 'bg-orange-700',
    typesColor: 'text-orange-200',
    genColor: 'text-orange-600',
  },
  flying: {
    bgColor: 'bg-sky-400',
    typesColor: 'text-sky-900',
    genColor: 'text-sky-600',
  },
  poison: {
    bgColor: 'bg-purple-500',
    typesColor: 'text-purple-100',
    genColor: 'text-purple-800',
  },
  ground: {
    bgColor: 'bg-yellow-600',
    typesColor: 'text-yellow-800',
    genColor: 'text-yellow-700',
  },
  rock: {
    bgColor: 'bg-stone-400',
    typesColor: 'text-stone-200',
    genColor: 'text-stone-600',
  },
  bug: {
    bgColor: 'bg-lime-500',
    typesColor: 'text-lime-900',
    genColor: 'text-lime-700',
  },
  ghost: {
    bgColor: 'bg-purple-900',
    typesColor: 'text-purple-100',
    genColor: 'text-purple-700',
  },
  steel: {
    bgColor: 'bg-slate-400',
    typesColor: 'text-slate-200',
    genColor: 'text-slate-500',
  },
  fire: {
    bgColor: 'bg-red-500',
    typesColor: 'text-red-100',
    genColor: 'text-red-500',
  },
  water: {
    bgColor: 'bg-blue-500',
    typesColor: 'text-blue-100',
    genColor: 'text-blue-600',
  },
  grass: {
    bgColor: 'bg-green-500',
    typesColor: 'text-green-900',
    genColor: 'text-green-700',
  },
  electric: {
    bgColor: 'bg-yellow-500',
    typesColor: 'text-yellow-800',
    genColor: 'text-yellow-600',
  },
  psychic: {
    bgColor: 'bg-pink-400',
    typesColor: 'text-pink-900',
    genColor: 'text-pink-600',
  },
  ice: {
    bgColor: 'bg-cyan-500',
    typesColor: 'text-cyan-100',
    genColor: 'text-cyan-600',
  },
  dragon: {
    bgColor: 'bg-indigo-500',
    typesColor: 'text-indigo-900',
    genColor: 'text-indigo-700',
  },
  dark: {
    bgColor: 'bg-amber-950',
    typesColor: 'text-amber-100',
    genColor: 'text-amber-900',
  },
  fairy: {
    bgColor: 'bg-fuchsia-400',
    typesColor: 'text-fuchsia-900',
    genColor: 'text-fuchsia-700',
  },
}

export default function colorsByType(type) {
  return COLORS[type]
}