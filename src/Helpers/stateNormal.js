const stateNormal = (number, type) => {
  if (type === "temperature") {
    if (number <= 0) {
      return "critically";
    } else if (number > 0 && number <= 20) {
      return "unrecommended";
    } else if (number > 20) {
      return "normal";
    }
  } else if (type === "Water") {
    if (number <= 25) {
      return "critically";
    } else if (number > 25 && number <= 50) {
      return "unrecommended";
    } else if (number > 50 && number <= 75) {
      return "normal";
    } else if (number > 75) {
      return "unrecommended";
    }
  } else if (type === "PPM") {
    if (number <= 800) {
      return "normal";
    } else if (number > 800 && number <= 1500) {
      return "unrecommended";
    } else if (number > 1500) {
      return "critically";
    }
  }
};
export default stateNormal;
