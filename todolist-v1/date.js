// jshint es version 6. I don't know will this work for me or not
const getDate = () => {
  const today = new Date();
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  const day = today.toLocaleDateString("en-in", options);
  return day;
};
module.exports = getDate;
