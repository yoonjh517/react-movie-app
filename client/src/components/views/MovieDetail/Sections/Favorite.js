import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Button } from "antd";

function Favorite(props) {
  const movieId = props.movieId;
  const userFrom = props.userFrom;
  const movieTitle = props.movieInfo.title;
  const moviePost = props.movieInfo.backdrop_path;
  const movieRunTime = props.movieInfo.runtime;

  const [FavoriteNumber, setFavoriteNumber] = useState(0);
  const [Favorited, setFavorited] = useState(false);

  let variables = {
    userFrom: userFrom,
    movieId: movieId,
    movieTitle: movieTitle,
    moviePost: moviePost,
    movieRunTime: movieRunTime,
  };

  useEffect(() => {
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

  const onClickFavorite = () => {
    if (Favorited) {
      Axios.post("/api/favorite/removeFromFavorite", variables).then(
        (response) => {
          if (response.data.success) {
            setFavoriteNumber(FavoriteNumber - 1);
            setFavorited(!Favorited);
          } else {
            alert("failed to delete it from favorite list");
          }
        }
      );
    } else {
      Axios.post("/api/favorite/addToFavorite", variables).then((response) => {
        if (response.data.success) {
          setFavoriteNumber(FavoriteNumber + 1);
          setFavorited(!Favorited);
        } else {
          alert("failed to add it to favorite list");
        }
      });
    }
  };

  return (
    <div>
      <Button onClick={onClickFavorite}>
        {Favorited ? "Not Favorite" : "Add to Favorite"} {FavoriteNumber}
      </Button>
    </div>
  );
}

export default Favorite;
