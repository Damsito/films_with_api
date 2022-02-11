import { Link } from "react-router-dom";

function Card({ film }) {
  return (
    <Link to={`/films/${film.id}`}>
      <img
        className="block object-cover object-center w-full h-full rounded-lg"
        src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
        alt={film.title}
      />
    </Link>
  );
}

export default Card;
