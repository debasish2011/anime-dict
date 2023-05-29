import React from 'react'
import { useContext } from 'react'
import AnimeContext  from './Context/animeContext'

const AnimeList = ({animes, animeComponent, handleList}) => {
  const { setAnimeInfo } = useContext(AnimeContext);
  const Component = animeComponent;
  return (
    <>
      {
        animes ? (
          animes.map((anime, index) => {
            return (
              <>
              <div className="mycard" key={index} onClick={()=>setAnimeInfo(anime)}>
                <img src={anime.images.jpg.large_image_url} alt="animeImage" />
                <div className="anime-info">
                  <h4>{anime.title}</h4>
                  <div className="overlay" onClick={()=>handleList(anime)}>
                      <h4>{anime.title_japanese}</h4>
                      <h3>SYNOPSIS</h3>
                      <div className="synopsis">
                        <p>{anime.synopsis}</p>
                      </div>
                      <Component/>
                  </div>

                </div>
              </div>
            </>
            )
          })
        ) : "Not Found"
      }

    </>
  )
}

export default AnimeList;