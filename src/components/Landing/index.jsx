import React, { useState, useEffect, useContext } from "react";
import { TeamContext } from "../../TeamContext/TeamContext";
import "../Landing/style.css";

export default function Landing() {
  const { teamData } = useContext(TeamContext);
  const [truth, settruth] = useState(true);
  const [teams, setTeams] = useState({ home: "", away: "" });
  const [scores, setScores] = useState({ home: 0, away: 0 });

  const Countries = ({ countries }) => {
    return (
      <div className="country">
        <div className="countryHome">
          <h1>Home</h1>
          <select
            className="home"
            onChange={(e) => {
              setTeams((prev) => ({ ...prev, home: e.target.value }));
            }}
          >
            <option selected disabled value>
              select country
            </option>
            {countries.map((pays, i) => {
              return <option key={pays.country + i}>{pays.country}</option>;
            })}
          </select>
        </div>
        <div className="countryAway">
          <h1>Away</h1>
          <select
            className="home"
            onChange={(e) => {
              e.preventDefault();
              setTeams((prev) => ({ ...prev, away: e.target.value }));
              console.log(teams, "hello world");
            }}
          >
            <option selected disabled value>
              select country
            </option>
            {countries.map((pays, i) => {
              return <option key={pays.country + i}>{pays.country}</option>;
            })}
          </select>
        </div>
      </div>
    );
  };

  const Clubs = ({ clubs }) => {
    return (
      <div className="country">
        <div className="countryHome">
          <h1>Home</h1>
          <select
            name="home"
            className="home"
            onChange={(e) => {
              setTeams((prev) => ({ ...prev, home: e.target.value }));
            }}
          >
            <option selected disabled value>
              select club
            </option>
            {clubs.map((club) => {
              return (
                <option value={club.name} key={club.name}>
                  {club.name}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <h1>Away</h1>
          <select
            name="away"
            className="home"
            onChange={(e) => {
              setTeams((prev) => ({ ...prev, away: e.target.value }));
            }}
          >
            <option selected disabled value>
              select club
            </option>
            {clubs.map((club) => {
              return (
                <option value={club.name}key={club.name}>
                  {club.name}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    );
  };

  return (
    <div className="App">
      <h1>Progostic Faking App</h1>
      <section className="main">
        <div className="select_btns">
          <button
            className="club_btn"
            onClick={() => {
              settruth(!truth);
            }}
          >
            Choose Clubs/Countries
          </button>
        </div>

        {teamData && (
          <div className="container">
            {truth ? (
              <Clubs clubs={teamData.clubs} />
            ) : (
              <Countries countries={teamData.countries} />
            )}
          </div>
        )}
      </section>

      <div className="inputs">
        <div>
          <h1>TEAMS SELECTED</h1>
          <div classnmae="dispay3">
            <div className="display3">
              <h2>Home:</h2>
              <p>{teams.home}</p>
              <img src={teams.home.url} alt="" />
            </div>
            <div>
              <input
                type="number"
                id="num"
                placeholder="input score"
                onChange={(e) => {
                  setScores((prev) => ({ ...prev, away: e.target.value }));
                }}
              />
            </div>
          </div>
        </div>
        <div classnmae="dispay3">
          <div className="display3">
            <h2>Away:</h2>
            <p>{teams.away}</p>
          </div>
          <div>
            <input
              type="number"
              id="num"
              placeholder="input score"
              onChange={(e) => {
                setScores((prev) => ({ ...prev, away: e.target.value }));
              }}
            />
          </div>
        </div>
      </div>
      <button>Submit</button>
    </div>
  );
}
