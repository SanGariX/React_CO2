import HeroState from "../../Helpers/HeroState";
import stateNormal from "../../Helpers/stateNormal";

const Hero = ({ temperature, Water, PPM }) => {
  const temperatureConst = stateNormal(temperature, "temperature");
  const WaterConst = stateNormal(Water, "Water");
  const PPMConst = stateNormal(PPM, "PPM");
  const mainState = HeroState({
    temperatureConst: temperatureConst,
    WaterConst: WaterConst,
    PPMConst: PPMConst,
  });
  const mainStateStyle = (mainState) => {
    if (mainState === "Clear") {
      return "green";
    } else if (mainState === "Normally") {
      return "orange";
    } else if (mainState === "Critical") {
      return "red";
    }
  };
  const mainStateDesc = (mainState) => {
    if (mainState === "Clear") {
      return "The condition of the room is normal";
    } else if (mainState === "Normally") {
      return "It is necessary to ventilate the room";
    } else if (mainState === "Critical") {
      return "It is critical to ventilate the room";
    }
  };
  return (
    <div className={`hero ${mainStateStyle(mainState)}`}>
      <div className="hero_container container">
        <h2 className={`state_title ${mainStateStyle(mainState)}`}>
          {mainState}
        </h2>
        <p className={`state_desc ${mainStateStyle(mainState)}`}>
          {mainStateDesc(mainState)}
        </p>
      </div>
    </div>
  );
};

export default Hero;
