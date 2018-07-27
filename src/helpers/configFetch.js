export const getProfile = id =>
  `https://mysterious-reef-29460.herokuapp.com/api/v1/user-info/${id}`;

export const getRequestNews =
  "https://mysterious-reef-29460.herokuapp.com/api/v1/news";

export const postRequest =
  "https://mysterious-reef-29460.herokuapp.com/api/v1/validate";

export const myInit = objBody => ({
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(objBody)
});
