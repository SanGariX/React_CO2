import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Graph = ({ history }) => {
  const result = [...history].reverse().filter((_, index) => {
    if(index > 34){
      return false
    }else{
      return true
    }
  })
  if(history)
  return (
    <div className="graph_wrapper">
      <h2 className="graph_wrapper_title">Температура</h2>
      <ResponsiveContainer width={"100%"} height={400}>
        <LineChart data={result}>
          <CartesianGrid stroke="black" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip animationDuration={100}/>
          <Legend />
          <Line strokeWidth={3} type="monotone" dataKey="temperature" stroke="red" />
        </LineChart>
      </ResponsiveContainer>
      <h2 className="graph_wrapper_title">PPM</h2>
      <ResponsiveContainer width={"100%"} height={400}>
        <LineChart data={history}>
          <CartesianGrid stroke="black" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line strokeWidth={3} type="monotone" dataKey="PPM" stroke="#4cad80" />
        </LineChart>
      </ResponsiveContainer>
      <h2 className="graph_wrapper_title">Water</h2>
      <ResponsiveContainer width={"100%"} height={400}>
        <LineChart data={history}>
          <CartesianGrid stroke="#676767" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line strokeWidth={3} type="monotone" dataKey="water" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graph;
