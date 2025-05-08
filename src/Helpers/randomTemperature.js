const randomTemperature = () => {
  const max = 35;
  const min = 0;
  return Math.floor(Math.random() * (max - min) + min);
};
export default randomTemperature;
