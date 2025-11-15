import { useCat } from "../hooks/useCats";
import type { Cat } from "../types/cats.types";

function CatsList() {
  const { fetchCats, loadingCats } = useCat();
  return loadingCats ? (
    <div>Loading</div>
  ) : (
    <div>
      <ul>
        {fetchCats?.map((cat: Cat) => (
          <li>{cat.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default CatsList;
