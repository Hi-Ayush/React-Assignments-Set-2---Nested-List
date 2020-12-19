import React from "react";
import City from "./city";

export default function State(props) {
  const [cityIndex, setCityIndex] = React.useState(-1);
  const [townIndex, setTownIndex] = React.useState(-1);

  const handleStates = (event) => {
    let index = event.target.id;
    index = index.charAt(index.length - 1) - 1;
    if (cityIndex === index) {
      setCityIndex(-1);
      return;
    }
    setCityIndex(index);
    setTownIndex(-1);
  };
  return (
    <>
      {props.states.map((item, index) => (
        <div key={index} onClick={handleStates} id={`state${index + 1}`}>
          {item.name}
        </div>
      ))}
      {cityIndex !== -1 && (
        <City index={townIndex} city={props.states[cityIndex]} />
      )}
    </>
  );
}
