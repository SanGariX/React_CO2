import "./App.css";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Main from "./Components/Main/Main";

function App() {
  return (
    <div className="wrapper">
      <div className="top_wrapper">
        <Header />
        <Hero />
        <svg
        className="wave wave1"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="70px"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          fill="white"
        >
          <path d="M0,100h1000l0,0c0,0-136.938,0-224,0c-193,0-170.235-1.256-278-35C399,34,395,0,249,0C118,0,0,100,0,100L0,100z" />
        </svg>
        <svg
        className="wave wave2"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="70px"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          fill="white"
        >
          <path d="M0,100h1000l0,0c0,0-136.938,0-224,0c-193,0-170.235-1.256-278-35C399,34,395,0,249,0C118,0,0,100,0,100L0,100z" />
        </svg>
        <svg
        className="wave wave3"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="70px"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          fill="white"
        >
          <path d="M0,100h1000l0,0c0,0-136.938,0-224,0c-193,0-170.235-1.256-278-35C399,34,395,0,249,0C118,0,0,100,0,100L0,100z" />
        </svg>
      </div>
      <Main />
      {/*  Contaminated Critical */}
    </div>
  );
}

export default App;
