import React, { useState } from "react";
import AnimeContext from "./animeContext";

function AnimeState(props) {
  const [animeData, setAnimeData] = useState();
  const [animeInfo,setAnimeInfo]=useState()
  const [myAnimeList,setMyAnimeList]=useState([])

  const getData = async (e) => {
    const res = await fetch(
      `https://api.jikan.moe/v4/anime?q=${e}&limit=20`
    );
    const resData = await res.json();
    setAnimeData(resData.data);
  };

  const handleAddToList=(anime)=>{
    const index=myAnimeList.findIndex((newanime)=>{
      return newanime.mal_id===anime.mal_id;
    })
    if (index<0) {
      setMyAnimeList([...myAnimeList,anime]);
    }
  }
  const handleRemoveFromList=(anime)=>{
    const newArray=myAnimeList.filter((myanime)=>{
      return myanime.mal_id !== anime.mal_id
    })
    setMyAnimeList(newArray)
  }

  return (
    <AnimeContext.Provider value={{ animeData, animeInfo, myAnimeList, handleAddToList, handleRemoveFromList, getData, setAnimeInfo }}>
      {props.children}
    </AnimeContext.Provider>
  );
}

export default AnimeState;
