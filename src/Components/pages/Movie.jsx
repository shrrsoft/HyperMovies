import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiKey, baseURL, imgBaseURL } from "../../apiConfig";
import { UserContext } from "../../Context/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faHeart,
  faHeartCircleMinus,
  faHeartCirclePlus,
  faShareNodes,
} from "@fortawesome/free-solid-svg-icons";

export default function Movie() {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  const { user, session, favoriteMovies } = useContext(UserContext);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (movie && favoriteMovies.length) {
      const boolIsFavorite = favoriteMovies.find((f) => f.id === movie.id);
      setIsFavorite(Boolean(boolIsFavorite));
    }
  }, [movie, favoriteMovies]);
  console.log(isFavorite);

  async function handleAddToWatchList() {
    const result = await axios.post(
      `${baseURL}/account/${user.id}/favorite?api_key=${apiKey}&session_id=${session}`,
      {
        media_type: "movie",
        movie_id: movie.id,
        favorite: true,
      }
    );
  }

  async function loadingMovie() {
    const { data } = await axios.get(`${baseURL}/${id}?api_key=${apiKey}`);
    setMovie(data);
  }

  useEffect(() => {
    loadingMovie();
  }, [id]);

  function posterImage(path, size = "w300") {
    return `${imgBaseURL}/${size}${path}`;
  }

  async function changeFavorite(id) {
    const options = {
      method: "POST",
      url: "https://api.themoviedb.org/3/account/21305597/favorite",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOTI5ZmU1YjU3YjA4NDRjMDI0NWRlZmZkMjVmMGQ3ZiIsInN1YiI6IjY2NWQ1ZWEyYTVlMDU0MzUwMTQ5MTlkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9ByxUHfhnVr9uiwOwUP4SAwA6Go6sn8Ry9YJcyui1M8",
      },
      data: { media_type: "movie", media_id: id, favorite: true },
    };
    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  return (
    <div className="container my-6 flex items-start md:justify-start justify-center relative top-[-32rem] mx-auto flex-wrap">
      <img src={posterImage(movie.poster_path)} alt={movie.title} />
      <div className="mx-5 flex flex-col gap-3 items-start">
        <h1 className="text-3xl">{movie.title}</h1>
        <div className="flex gap-4">
          <div className="flex items-baseline gap-1">
            <span className=" border-rose-600 rounded-full ">
              {isFavorite ? (
                <FontAwesomeIcon
                  icon={faHeartCircleMinus}
                  className="text-rose-600 text-2xl px-2 py-1.5"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faHeartCirclePlus}
                  className="text-rose-600 text-2xl px-2 py-1.5"
                />
              )}
            </span>
            <button onClick={() => changeFavorite(movie.id)}>
              {isFavorite ? "Remove from" : "Add to"} favorite
            </button>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-lg  border-rose-600 rounded-full px-1.5  ">
              <FontAwesomeIcon
                icon={faShareNodes}
                className="text-rose-600 text-2xl px-1.5 py-1.5 "
              />
            </span>
            <button>share</button>
          </div>
        </div>
        <button
          className="bg-yellow-500 text-black p-2 rounded-lg text-center"
          onClick={handleAddToWatchList}>
          Add to Watch List
        </button>
      </div>
    </div>
  );
}
