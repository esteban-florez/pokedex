export default function range(from, to) {
  let current = from

  return {
    [Symbol.iterator]() {
      return {
        next() {
          if (current <= to) {
            return { done: false, value: current++ }
          } else {
            return { done: true }
          }
        }
      }
    }
  }
}