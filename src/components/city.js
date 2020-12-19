import React from "react";
import Town from "./town";

export default function City(props) {
  const [townIndex, setTownIndex] = React.useState(props.index);

  const handleCity = (event) => {
    let index = event.target.id;
    index = index.charAt(index.length - 1) - 1;
    if (townIndex === index) {
      setTownIndex(-1);
      return;
    }
    setTownIndex(index);
  };
  return (
    <>
      {props.city.cities.map((item, index) => (
        <div onClick={handleCity} id={`city${index + 1}`} key={index}>
          {item.name}
        </div>
      ))}
      {townIndex !== -1 && <Town town={props.city.cities[townIndex]} />}
    </>
  );
}
