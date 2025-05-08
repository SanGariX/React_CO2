import image1 from "../../assets/temperature.png";
import image2 from "../../assets/water.png";
import image3 from "../../assets/clear.png";
const Monitoring = () => {
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
            <p className="monitoring_inner_item_number">27°</p>
          </div>
          <p className="monitoring_inner_item_state">Normal</p>
        </div>
        <div className="monitoring_inner_item">
          <div className="monitoring_inner_item_inner">
            <img
              className="monitoring_inner_item_image"
              src={image2}
              alt="temperature"
            />
            <p className="monitoring_inner_item_number">30 %</p>
          </div>
          <p className="monitoring_inner_item_state">Normal</p>
        </div>
        <div className="monitoring_inner_item">
          <div className="monitoring_inner_item_inner">
            <img
              className="monitoring_inner_item_image"
              src={image3}
              alt="temperature"
            />
            <p className="monitoring_inner_item_number">500 ppm</p>
          </div>
          <p className="monitoring_inner_item_state">Normal</p>
        </div>
      </div>
    </div>
  );
};

export default Monitoring;
