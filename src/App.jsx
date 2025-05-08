import { useEffect, useState } from "react";
import "./App.css";
import Background from "./Components/Background/Background";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Main from "./Components/Main/Main";
import randomWater from "./Helpers/randomWater";
import randomPPM from "./Helpers/randomPPM";
import randomTemperature from "./Helpers/randomTemperature";

function App() {
  const [history, setHistory] = useState([]);
  const [temperature, setTemperature] = useState(randomTemperature());
  const [Water, setWater] = useState(randomWater());
  const [PPM, setPPM] = useState(randomPPM());
  useEffect(() => {
    const interval = setInterval(() => {
      setTemperature(randomTemperature());
      setWater(randomWater());
      setPPM(randomPPM());
    }, 5000);
  }, []);
  useEffect(() => {
    setHistory([
      ...history,
      {
        temperature: temperature,
        Water: Water,
        PPM: PPM,
      },
    ]);
  }, [temperature, Water, PPM]);
  return (
    <div className="wrapper">
      <div className="top_wrapper">
        <Header />
        <Hero temperature={temperature} Water={Water} PPM={PPM}/>
        <Background />
      </div>
      <Main temperature={temperature} Water={Water} PPM={PPM} />
      {/*  Contaminated Critical */}
    </div>
  );
}

export default App;
