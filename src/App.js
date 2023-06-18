import "./App.css";
import Landing from "../src/components/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { TeamContext } from "./TeamContext/TeamContext";

function App() {
  const [teamData, setTeamData] = useState(null);
  console.log(teamData,  "hello peole");
  const getData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setTeamData(data);
        console.log(data,  "hello peole")
        return data;
      });
  };

  useEffect(() => {
    getData();
  }, []);
    return (
      <TeamContext.Provider value={{ teamData }}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Landing />} />
          </Routes>
        </BrowserRouter>
      </TeamContext.Provider>
    );
  }


export default App;
