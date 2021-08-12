import React, { useEffect, useState } from "react";
import Axios from "axios";

function Favorite(props) {
  const movieId = props.movieId;
  const userFrom = props.userFrom;
  const movieTitle = props.movieInfo.title;
  const moviePost = props.movieInfo.backdrop_path;
  const movieRunTime = props.movieInfo.runtime;

  const [FavoriteNumber, setFavoriteNumber] = useState(0);
  const [Favorited, setFavorited] = useState(false);

  useEffect(() => {
    let variables = {
      userFrom,
      movieId,
    };

    Axios.post("/api/favorite/favoriteNumber", variables).then((response) => {
      if (response.data.success) {
        console.log(response.data);
        setFavoriteNumber(response.data.favoriteNumber);
      } else {
        alert("failed to get information");
      }
    });

    Axios.post("/api/favorite/favorited", variables).then((response) => {
      if (response.data.success) {
        console.log("favorited", response.data);
        setFavorited(response.data.favorited);
      } else {
        alert("failed to get information");
      }
    });
  }, []);

  return (
    <div>
      <button>
        {Favorited ? "Not Favorite" : "Add to Favorite"} {FavoriteNumber}
      </button>
    </div>
  );
}

export default Favorite;
