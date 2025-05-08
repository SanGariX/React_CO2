import { useEffect, useState } from "react";
import "./App.css";
import Background from "./Components/Background/Background";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Main from "./Components/Main/Main";
import getTime from "./Helpers/GetTime";
import random from "./Helpers/random";

function App() {
  const MainObject = random();
  const [history, setHistory] = useState([]);
  const [temperature, setTemperature] = useState(MainObject.temperature);
  const [Water, setWater] = useState(MainObject.water);
  const [PPM, setPPM] = useState(MainObject.PPM);
  const [header, setHeader] = useState({
    graph: false,
    monitoring: true,
    history: false,
  });
  useEffect(() => {
    const interval = setInterval(() => {
      const object = random();
      setTemperature(object.temperature);
      setWater(object.water);
      setPPM(object.PPM);
    }, 7000);
  }, []);
  useEffect(() => {
    setHistory([
      ...history,
      {
        temperature: temperature,
        water: Water,
        PPM: PPM,
        time: getTime(),
      },
    ]);
  }, [temperature, Water, PPM]);

  return (
    <div className="wrapper">
      <div className="top_wrapper">
        <Header setHeader={setHeader} />
        <Hero temperature={temperature} Water={Water} PPM={PPM} />
        <Background />
      </div>
      <Main
        history={history}
        header={header}
        temperature={temperature}
        Water={Water}
        PPM={PPM}
      />
      {/*  Contaminated Critical */}
    </div>
  );
}

export default App;
