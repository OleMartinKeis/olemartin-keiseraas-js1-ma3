const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=f8bd76cbac4e4b2bbc298b6a97e55095"

async function getGames() {

    const response = await fetch(url);
    const results = await response.json();


    const gamesList = results.results;

    for(let i = 0; i < gamesList.length; i++) {
        console.log(gamesList[i]);
    }
}

getGames()