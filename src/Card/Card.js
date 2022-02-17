import { Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { toggle} from "../app/FavoritesSlice";
import ButtonFavorites from "../Button/ButtonFavorites";

function Card({ film }) {
  return (
      <div className={'relative'}>
        <Link to={`/films/${film.id}`}>
            { film.poster_path && <img
            className="block object-cover object-center w-full h-full rounded-lg"
            src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
            alt={film.title}
          />}
            <div className={'absolute right-3 top-2'}>
                <ButtonFavorites id={film.id} /></div>
        </Link>
      </div>
  );
}


export default Card;
