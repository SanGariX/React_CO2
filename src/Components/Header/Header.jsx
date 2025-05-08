import image1 from "../../assets/history.png";
import image2 from "../../assets/graph.png";
import image3 from "../../assets/monitoring.png";
const Header = ({ setHeader }) => {
  const handleClick = (type) => {
    if (type === "graph") {
      setHeader({
        graph: true,
        monitoring: false,
        history: false,
      });
    } else if (type === "monitoring") {
      setHeader({
        graph: false,
        monitoring: true,
        history: false,
      });
    } else if (type === "history") {
      setHeader({
        graph: false,
        monitoring: false,
        history: true,
      });
    }
  };
  return (
    <header className="header">
      <div className="container header_container">
        <h1 className="title_name">CO₂ Detect</h1>
        <div className="header_inner">
          <button
            onClick={() => {
              handleClick("history");
            }}
            className="header_inner_item"
          >
            <img src={image1} alt="monitoring" />
          </button>
          <button
            onClick={() => {
              handleClick("graph");
            }}
            className="header_inner_item"
          >
            <img src={image2} alt="history" />
          </button>
          <button
            onClick={() => {
              handleClick("monitoring");
            }}
            className="header_inner_item"
          >
            <img src={image3} alt="graph" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
