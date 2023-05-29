import React from "react";
import { useContext } from "react";
import AnimeList from "./AnimeList";
import AnimeInfo from "./AnimeInfo";
import AddToList from "./AddToList";
import AnimeContext from "./Context/animeContext";

const SearchAnime = () => {
  const { animeInfo, animeData, handleAddToList } = useContext(AnimeContext);
  return (
    <>
      <div className="mycontainer">
        <div className="animeInfo">{animeInfo && <AnimeInfo />}</div>
        <div className="anime-row">
          <div className="myrow">
            <AnimeList
              animes={animeData}
              animeComponent={AddToList}
              handleList={(anime) => handleAddToList(anime)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchAnime;
