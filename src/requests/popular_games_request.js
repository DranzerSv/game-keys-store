const game = {
  endpoint: `https://api.rawg.io/api/games`,
};

export async function getGames(query) {
  const response = await fetch(
    `${game.endpoint}?key=0cf416f886cf42d0bf81ef50f288e04b&search=${query}`
  );
  const data = await response.json();

  console.log(data['results']);
  return data['results'];
}
