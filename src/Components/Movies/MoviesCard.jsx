import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { imgBaseURL } from "../../apiConfig";

export default function MoviesCard({ movie }) {
  const [opacityImg, SetOpacityImg] = useState("" & false);

  function posterImage(path, size = "w300") {
    return `${imgBaseURL}/${size}${path}`;
  }

  return (
    <Link to={`/movie/${movie.id}`}>
      <div className="w-fit bg-cover relative m-5 text-slate-300 bg-gradient-to-b from-slate-900  to-slate-800 mx-auto rounded-3xl p-1.5 ">
        <div
          onMouseMove={(e) => SetOpacityImg("opacity-20")}
          onMouseLeave={(e) => SetOpacityImg("")}>
          <img
            className={`h-80  transition-all mx-auto delay-50 duration-500 rounded-t-2xl ${opacityImg}`}
            src={posterImage(movie.poster_path)}
            alt=""
          />
          <button
            className={` top-32 left-12 ${
              opacityImg ? "absolute " : "hidden"
            }`}>
            <span
              className="text-white bg-gradient-to-br from-rose-900 to-rose-500 px-6 py-2.5 rounded-xl flex"
              href="#">
              Read More
            </span>
          </button>
        </div>
        <div className="mt-2 ml-1 ">
          <span className="mr-2">
            <FontAwesomeIcon icon={faStar} className="text-yellow-600 " />{" "}
          </span>
          <span>{movie.vote_average.toFixed(1)}/10</span>
        </div>
        <div className="">
          <h3 className="ml-1 h-12 max-w-52">{movie.title}</h3>
        </div>
      </div>
    </Link>
  );
}
