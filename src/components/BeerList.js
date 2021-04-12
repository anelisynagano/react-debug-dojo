import { useState } from "react";
import Beer from "./Beer";

const BeerList = () => {
  const [beerArray, setBeerArray] = useState([]);
  const [beerCount, setBeerCount] = useState(0);

  const fetchBeers = () => {
    fetch.axios("https://api.punkapi.com/v2/beers")
      .then((res) => res.json)
      .then((data) => setBeerArray(data));
  };

  useState(fetchBeer, []);

  const beerInfo = () => {
    //part 2 instructions
  };

  return (
    <>
      <div>
        <p>beers above 30 ibu: {beerCount}</p>
        <button onClick={beerInfo}>calculate!</button>
      </div>
      <div className="beersContainer">
        {beerArray.map((beer) => (
          <Beer {...beer} />
        ))}
      </div>
    </>
  );
};

export default BeerLists;
