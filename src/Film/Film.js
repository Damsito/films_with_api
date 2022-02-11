import "../Home/Home.css";
import BackButton from "../Button/BackButton";
import { Link, Navigate, useParams } from "react-router-dom";
import films from "../Data/data.json";
import Card from "../Card/Card";
import Details from "../Details/Details";
import Rating from "../Rating/Rating";
import HorizontalList from "../HorizontalList/HorizontalList";

function Film() {
  let { id } = useParams();
  let film = films.filter((f) => f.id === parseInt(id))[0];
  return film ? (
    <div className={"container p-5"}>
      <div className={"w-32 ml-auto"}>
        <Link to="/">
          <BackButton label={"Retour"} />
        </Link>
      </div>
      <div className={"grid grid-cols-2 mt-5"}>
        <Card film={film} />
        <Details film={film} />
      </div>
      <div className={"mt-5"}>{film.overview}</div>
      <Rating note={film.vote_average} />
      <HorizontalList id={film.id} genre_ids={film.genre_ids} />
    </div>
  ) : (
    <Navigate to="/" />
  );
}

export default Film;
