import image1 from "../../assets/clear.png";
import image2 from "../../assets/temperature.png";
import image3 from "../../assets/water.png";
const History = ({ history: historyTemp }) => {
  let history = [...historyTemp].reverse();
  return (
    <div className="container history_container">
      <div className="history_flexbox">
        <div className="history_inner">
          {history.splice(0, 34).map(({ PPM, temperature, water, time }, idx) => (
            <div key={idx} className="history_inner_main">
              <div className="history_inner_item">
                <div className="history_inner_item_inner">
                  <img src={image1} alt="clear" />
                  <p className="history_inner_item_text">{PPM} ppm</p>
                </div>
                <div className="history_inner_item_time">{time}</div>
              </div>
              <div className="history_inner_item">
                <div className="history_inner_item_inner">
                  <img src={image2} alt="temperature" />
                  <p className="history_inner_item_text">{temperature}°</p>
                </div>
                <div className="history_inner_item_time">{time}</div>
              </div>
              <div className="history_inner_item">
                <div className="history_inner_item_inner">
                  <img src={image3} alt="water" />
                  <p className="history_inner_item_text">{water} %</p>
                </div>
                <div className="history_inner_item_time">{time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default History;
