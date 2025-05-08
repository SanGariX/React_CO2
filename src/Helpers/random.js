const random = () => {
  const max1 = 3000;
  const min1 = 400;
  const max2 = 35;
  const min2 = 0;
  const max3 = 100;
  const min3 = 0;
  const PPM = Math.floor(Math.random() * (max1 - min1) + min1);
  const temperature = Math.floor(Math.random() * (max2 - min2) + min2);
  const Water = Math.floor(Math.random() * (max3 - min3) + min3);
  return {
    PPM: PPM,
    temperature:temperature,
    water:Water
  }
};
export default random;
