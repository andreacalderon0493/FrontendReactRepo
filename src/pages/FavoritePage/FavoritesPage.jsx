import FavoritesList from "../../components/FavoritesList/FavoritesList";
import "./FavoritesPage.css";

const FavoritesPage = ({}) => {
  return (
    <div className="favorite">
      <h1>Favorites</h1>
      <FavoritesList />
    </div>
  );
};

export default FavoritesPage;
