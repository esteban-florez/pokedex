export default async function fetchData(url) {
  try {
    const response = await fetch(url)
    return await response.json()
  } catch (error) {
    console.log(error)
  }
}