import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiKey, baseURL, imgBaseURL } from "../../apiConfig";
import { UserContext } from "../../Context/UserContext";

export default function Movie() {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  const { user, session } = useContext(UserContext);

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

  return (
    <div className="container my-6 flex items-center">
      <img src={posterImage(movie.poster_path)} alt={movie.title} />
      <div className="m-5 flex flex-col gap-3 items-center">
        <h1 className="text-lg">{movie.title}</h1>
        <button
          className="bg-yellow-500 text-black p-2 rounded-lg text-center"
          onClick={handleAddToWatchList}>
          Add to Watch List
        </button>
      </div>
    </div>
  );
}
