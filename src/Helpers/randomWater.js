const randomWater = ()=>{
  const max = 100;
  const min = 0;
  return Math.floor(Math.random() * (max - min) + min);
}
export default randomWater