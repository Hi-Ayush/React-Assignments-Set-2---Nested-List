import React, { Component, useState } from "react";
import "./../styles/App.css";

// Do not alter the states const and values inside it.
const states = [
  {
    name: "Madhya Pradesh",
    cities: [
      {
        name: "Indore",
        towns: [
          {
            name: "Mhow"
          },
          {
            name: "Dewas"
          }
        ]
      },
      {
        name: "Bhopal",
        towns: [
          {
            name: "Manit"
          },
          {
            name: "Berasia"
          }
        ]
      },
      {
        name: "Gwalior",
        towns: [
          {
            name: "Ajaypur"
          }
        ]
      }
    ]
  },
  {
    name: "Jharkhand",
    cities: [
      {
        name: "Dhanbad",
        towns: [
          {
            name: "IIT(ISM) Dhanbad"
          },
          {
            name: "Hirapur"
          }
        ]
      },
      {
        name: "Wasseypur",
        towns: [
          {
            name: "Sardar khan's"
          },
          {
            name: "Faizal khan's"
          }
        ]
      },
      {
        name: "Mirzapur",
        towns: [
          {
            name: "Kaleen bhaiya's"
          },
          {
            name: "Guddu bhaiya's"
          }
        ]
      }
    ]
  },
  {
    name: "Assam",
    cities: [
      {
        name: "Guwhati",
        towns: [
          {
            name: "Amin"
          },
          {
            name: "Jalah"
          }
        ]
      },
      {
        name: "Jungle1",
        towns: [
          {
            name: "Tiger found at IIT Guwahati"
          },
          {
            name: "Leopard found in IIT Guwahati"
          }
        ]
      },
      {
        name: "Tezpur",
        towns: [
          {
            name: "Dibrugarh"
          },
          {
            name: "Silchar"
          }
        ]
      }
    ]
  },
  {
    name: "Bihar",
    cities: [
      {
        name: "Patna",
        towns: [
          {
            name: "Sonpur"
          },
          {
            name: "Maner"
          }
        ]
      },
      {
        name: "Gaya",
        towns: [
          {
            name: "Bakraur"
          },
          {
            name: "Barachatti"
          }
        ]
      },
      {
        name: "Darbhanga",
        towns: [
          {
            name: "Singhwara"
          },
          {
            name: "Jale"
          }
        ]
      }
    ]
  }
];

function App() {
  const [townVisibility, setTownVisibility] = React.useState(false);
  const [cityVisibility, setCityVisibilty] = React.useState(false);
  const [cityIndex, setCityIndex] = React.useState(0);
  const [townIndex, setTownIndex] = React.useState(0);

  const handleStates = (index, stateName) => {
    setCityIndex(index);
    setCityVisibilty(true);
  };
  const handleCity = (index, cityName) => {
    setTownIndex(index);
    setTownVisibility(true);
  };
  return (
    <div id="main">
      {states.map((el, index) => (
        <button
          id={"state" + (index + 1)}
          key={el.name}
          onClick={() => {
            handleStates(index, el.name);
          }}
        >
          {el.name}{" "}
        </button>
      ))}
      <div>
        {cityVisibility &&
          states[cityIndex].cities.map((el, index) => (
            <div
              id={"city" + (index + 1)}
              key={el.name}
              onClick={() => {
                handleCity(index, el.name);
              }}
            >
              {" "}
              {el.name}{" "}
            </div>
          ))}
      </div>
      <div>
        {townVisibility &&
          states[cityIndex].cities[townIndex].towns.map((el, index) => (
            <div id={"town" + (index + 1)} key={el.name}>
              {" "}
              {el.name}{" "}
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
