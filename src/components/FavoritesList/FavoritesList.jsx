import { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const FavoritesList = () => {
  const [user, token] = useAuth();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await axios.get(
          `https://localhost:5001/api/Favorites/myFavorites`,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );

        setFavorites(response.data);
      } catch (error) {
        console.log(error.response);
      }
    };

    fetchFavorites();
  }, []);

  return (
    <div>
      {favorites.map((favorite) => (
        <div key={favorite.id}>
          <h2>{favorite.title}</h2>
          <img src={favorite.thumbnailUrl} />
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
