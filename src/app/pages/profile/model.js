export const getProfile = id =>
  `https://mysterious-reef-29460.herokuapp.com/api/v1/user-info/${id}`;

export const placeWebIconFirst = arr => {
  return arr.sort(el => {
    return el.label === 'web' ? -1 : 1;
  });
};
