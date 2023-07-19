import { TeamContext } from "../../TeamContext/TeamContext";
import React, { useContext, useEffect, useState } from "react";
import Landing from "../Landing";
import "../Scores/style.css";
import  { createRef } from 'react'
import { createFileName, useScreenshot } from "use-react-screenshot";

export default function Scores() {
  const { teamData } = useContext(TeamContext);
  const teamScores = JSON.parse(localStorage.getItem("teamScores"));
  const [teamFlags, setTeamFlags] = useState();
  const [flag, setFlags] = useState();

  const ref = createRef(null)
  const [image, takeScreenshot] = useScreenshot({
    type: "image/jpeg",
    quality: 1.0
  })
  


  const download = (image,{ name = 'sampleimage', extension = 'jpg' } = {}) => {
    const a = document.createElement('a');
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  };

  const downloadScreenshot = () => takeScreenshot(ref.current).then(download);

  // const teamFlag = teamData.filter((el)=>{
  //   el = teamScores.home
  // useEffect(() => {
  //   const teams = teamData.toArray()
  //   console.log(teams, "hellolllllll")
  // }, []);

  useEffect(() => {
    if (teamData) {
      const { clubs, countries } = teamData;
      const teamFlag =
        clubs.find((club) => club.name === teamScores.home) ||
        countries.find((country) => country.country === teamScores.home);
      setTeamFlags(teamFlag);
    }
  }, [teamData]);
  console.log({ teamFlags }, "teamFlag");

  useEffect(() => {
    if (teamData) {
      const { clubs, countries } = teamData;
      const Flag =
        clubs.find((club) => club.name === teamScores.away) ||
        countries.find((country) => country.country === teamScores.away);
      setFlags(Flag);
    }
  }, [teamData]);

  

  return (
    <>
    <div className="cons" ref={ref}>
    <div className="container1" >
      <div className="container2">
        <div className="team">
          <div className="images">
          <img src={teamFlags?.url || teamFlags?.flag} />
          </div>
          <div className="teams">
          <h1>{teamFlags?.name || teamFlags?.country}</h1>
          </div>
        </div>
        <div className="scores">
          <p>{teamScores.homeScore} </p> -<p>{teamScores.awayScore} </p>
        </div>
        <div className="team">
          <div className="images">
        <img src={flag?.url || flag?.flag} />
        </div>
        <div className="teams">
          <h1>{teamScores.away}</h1>
          </div>
        </div>
      </div>
    </div>
    <div className="butons">
          <button id="btn" onClick={downloadScreenshot}>Capture</button>
        </div>
    </div>
    </>
  );
}
