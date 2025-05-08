import History from "../History/History";
import Monitoring from "../Monitoring/Monitoring";

const Main = ({ history, header, temperature, Water, PPM }) => {
  return (
    <main className="main">
      <div className="container main_container">
        {header.monitoring && (
          <Monitoring temperature={temperature} Water={Water} PPM={PPM} />
        )}
        {header.history && <History history={history} />}
      </div>
    </main>
  );
};

export default Main;
