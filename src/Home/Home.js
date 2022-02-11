import "./Home.css";
import filmsData from "../Data/data.json";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Input from "../Input/Input";
import VerticalList from "../VerticalList";
function Home() {
  const [searchParams] = useSearchParams();
  let filmQuery = searchParams.get("film") || "";
  const [value, setValue] = useState(filmQuery);
  let history = useNavigate();
  let [films, setFilms] = useState([]);

  function handleChange(event) {
    let value = event.target.value;
    setValue(value);
    const newRoute = `?film=${value}`;
    history(value ? newRoute : "/");
  }
  useEffect(() => {
    filmQuery
      ? setFilms(
          filmsData.filter((f) => {
            let name = f.title.toUpperCase();
            return name.includes(filmQuery.toUpperCase());
          })
        )
      : setFilms(filmsData);
  }, [filmQuery, setFilms]);
  return (
    <section className="overflow-hidden text-gray-700 ">
      <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
        <Input value={value} handleChange={handleChange} />
        <VerticalList films={films} />
      </div>
    </section>
  );
}

export default Home;
