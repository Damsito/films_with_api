import "./Home.css";
import Card from "../Card/Card";
import filmsData from "../Data/data.json";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Input from "../Input/Input";
function Home() {
  const [searchParams] = useSearchParams();
  let filmQuery = searchParams.get("film") || "";
  const [value, setValue] = useState(filmQuery);
  let history = useNavigate();
  let [films, setFilms] = useState([]);

  function handleChange(event) {
    let value = event.target.value;
    setValue(value);
    const filmQuery = "film=" + value;
    const newRoute = `?${filmQuery}`;
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
        <div className="flex flex-wrap -m-1 md:-m-2 mt-5">
          {films.map((film, index) => {
            return (
              <div key={`${film.id}`} className="flex flex-wrap w-1/3">
                <div className="w-full p-1 md:p-2">
                  <Card film={film} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Home;
