import filmsData from "../Data/data.json";
import Card from "../Card/Card";

function HorizontalList({ id, genre_ids }) {
  let recommandations = new Set([]);
  filmsData.forEach((f) => {
    let rec = f.genre_ids.filter((genre) => {
      return genre_ids.includes(genre);
    });
    if (rec.length > 0) {
      recommandations.add(f);
    }
  });
  let finalArray = Array.from(recommandations)
    .filter((f) => f.id !== parseInt(id))
    .slice(0, 4);
  return (
    <div>
      <h1>Contenu similaire</h1>
      <div className={"grid grid-cols-4 gap-4"}>
        {finalArray.map((film) => {
          return <Card key={film.id} film={film} />;
        })}
      </div>
    </div>
  );
}

export default HorizontalList;
