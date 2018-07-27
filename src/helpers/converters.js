export const placeWebIconFirst = arr => {
  return arr.sort(el => {
    return el.label === "web" ? -1 : 1;
  });
};
