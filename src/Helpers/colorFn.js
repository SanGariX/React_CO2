const colorFn = (state) => {
  if (state === "normal") {
    return "green";
  } else if (state === "unrecommended") {
    return "orange";
  } else if (state === "critically") {
    return "red";
  }
};
export default colorFn