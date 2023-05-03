import React, { useState } from 'react'
import pokemonsJson from '../data/pokemon.json'
import gamesJson from '../data/games.json'
import anisJson from '../data/anis.json'
import monsterBallJson from '../data/monsterBall.json'
import newsJson from '../data/news.json'


const DataContext = React.createContext();


const DataProvider = ({children}) =>{
  //포켓몬
  const [pokemons, setPokemons] = useState(pokemonsJson);
  //게임, 모바일 게임
  const [games, setGames] = useState(gamesJson);
  //애니,극장판
  const [anis, setAnis] = useState(anisJson);
  //몬스터볼
  const [monsterBall, setMonsterball] = useState(monsterBallJson);
  //news
  const [news, setNews] = useState(newsJson);


  const [btnValue, setBtnvalue] = useState(false);

  const value = {
    state : {pokemons,games,anis,monsterBall,news,btnValue},
    action : {setPokemons,setGames,setAnis,setMonsterball,setNews,setBtnvalue}
  }
    
  return(
    <DataContext.Provider value = {value}>
      {children}
    </DataContext.Provider>
  )

}

export {DataProvider}

export default DataContext