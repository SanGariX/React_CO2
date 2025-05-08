import Monitoring from "../Monitoring/Monitoring";

const Main = ({temperature, Water, PPM}) => {

  return (
    <main className="main">
      <div className="container main_container">
        <Monitoring temperature={temperature} Water={Water} PPM={PPM} />
      </div>
    </main>
  );
};

export default Main;
