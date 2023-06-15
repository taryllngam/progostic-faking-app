import React, { useState, useEffect } from "react";

export default function Landing() {
  const [data, setData] = useState(null);
  const [display, setDisplay] = useState({ clubs: true, countries: false });

  const getData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson);
        console.log(myJson);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const Countries = ({ countries }) => {
    return (
      <div>
        {countries.map((pays, i) => (
          <p key={pays.country + i}>{pays.country}</p>
        ))}
      </div>
    );
  };

  const Clubs = ({ clubs }) => {
    return (
      <div>
        {clubs.map((fc, i) => (
          <p key={fc.name + i}>{fc.name}</p>
        ))}
      </div>
    );
  };

  const showClubs = () => setDisplay({ countries: false, clubs: true });

  const showCountries = () => setDisplay({ clubs: false, countries: true });

  return (
    <div className="App">
      <section
        className="main"
        style={{
          display: "flex",
          gap: "20px",
          width: "100%",
          alignItems: "flex-start",
        }}
      >
        <div className="select_btns">
          <button className="club_btn" onClick={showClubs}>
            Select Clubs
          </button>
          <button className="country_btn" onClick={showCountries}>
            Select coutry
          </button>
        </div>

        {data && (
          <div
            className="container"
            style={{
              display: "flex",
              gap: "20px",
              width: "100%",
              justifyContent: "space-around",
            }}
          >
            {display.clubs && <Clubs clubs={data.clubs} />}
            {display.countries && <Countries countries={data.countries} />}
          </div>
        )}
      </section>
      {/* {data.length > 0 && data.map((item) => <p>{item.about}</p>)} */}
    </div>
  );
}
