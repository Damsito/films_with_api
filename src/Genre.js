import genres from "./Data/genres.json";
import Chips from "./Chips";

function Genre({ id }) {
  const label = genres[id];
  if (!label) return null;
  return <Chips label={label} />;
}
export default Genre;
