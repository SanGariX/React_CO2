const randomPPM = () => {
  const max = 3000;
  const min = 400;
  return Math.floor(Math.random() * (max - min) + min);
};
export default randomPPM;
