import React from "react";
import { useContext } from "react";
import AnimeList from "./AnimeList";
import AnimeInfo from "./AnimeInfo";
import AnimeContext from "./Context/animeContext";
import RemoveFromList from "./RemoveFromList";

const Mylist = () => {
  const { animeInfo, myAnimeList, handleRemoveFromList } =
    useContext(AnimeContext);
  return (
    <>
      <div className="mycontainer">
        <div className="animeInfo">{animeInfo && <AnimeInfo />}</div>
        <div className="anime-row">
          <div className="myrow">
            <AnimeList
              animes={myAnimeList}
              animeComponent={RemoveFromList}
              handleList={(anime) => handleRemoveFromList(anime)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Mylist;
