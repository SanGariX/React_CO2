const HeroState = ({temperatureConst, WaterConst, PPMConst})=>{
  const number1 = temperatureConst === "critically"? 3: temperatureConst === "unrecommended"? 2: temperatureConst === "normal" ? 1 : 0
  const number2 = WaterConst === "critically"? 3: WaterConst === "unrecommended"? 2: WaterConst === "normal" ? 1 : 0
  const number3 = PPMConst === "critically"? 3: PPMConst === "unrecommended"? 2: PPMConst === "normal" ? 1 : 0
  const result = number1+number2+number3
  if(result >= 0 && result < 5){
    return "Clear"
  }else if (result >= 5 && result < 7) {
    return "Normally"
  }else if (result >= 7) {
    return "Critical"
  }
}
export default HeroState