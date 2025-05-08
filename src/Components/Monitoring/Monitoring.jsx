import image1 from "../../assets/temperature.png";
import image2 from "../../assets/water.png";
import image3 from "../../assets/clear.png";
import stateNormal from "../../Helpers/stateNormal";
import colorFn from "../../Helpers/colorFn";
const Monitoring = ({ temperature, Water, PPM }) => {
  const temperatureConst = stateNormal(temperature, "temperature");
  const WaterConst = stateNormal(Water, "Water");
  const PPMConst = stateNormal(PPM, "PPM");
  return (
    <div className="container monitoring_container">
      <div className="monitoring_inner">
        <div className="monitoring_inner_item">
          <div className="monitoring_inner_item_inner">
            <img
              className="monitoring_inner_item_image"
              src={image1}
              alt="temperature"
            />
            <p className="monitoring_inner_item_number">{temperature}°</p>
          </div>
          <p
            className={`monitoring_inner_item_state ${colorFn(
              temperatureConst
            )}`}
          >
            {temperatureConst}
          </p>
        </div>
        <div className="monitoring_inner_item">
          <div className="monitoring_inner_item_inner">
            <img
              className="monitoring_inner_item_image"
              src={image2}
              alt="temperature"
            />
            <p className="monitoring_inner_item_number">{Water} %</p>
          </div>
          <p className={`monitoring_inner_item_state ${colorFn(WaterConst)}`}>
            {WaterConst}
          </p>
        </div>
        <div className="monitoring_inner_item">
          <div className="monitoring_inner_item_inner">
            <img
              className="monitoring_inner_item_image"
              src={image3}
              alt="temperature"
            />
            <p className="monitoring_inner_item_number">{PPM} ppm</p>
          </div>
          <p className={`monitoring_inner_item_state ${colorFn(PPMConst)}`}>
            {PPMConst}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Monitoring;
