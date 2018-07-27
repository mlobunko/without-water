export const errorToString = error => {
  return (
    error.charAt(0).toUpperCase() +
    error
      .replace(/_/g, " ")
      .substr(1)
      .toLowerCase()
  );
};
