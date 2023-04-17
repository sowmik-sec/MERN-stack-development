// jshint es version 6. I don't know will this work for me or not
const getDate = () => {
  const today = new Date();
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  return today.toLocaleDateString("en-in", options);
};
module.exports.getDate = getDate;

const getDay = () => {
  const today = new Date();
  const options = {
    weekday: "long",
  };
  return today.toLocaleDateString("en-in", options);
};

module.exports.getDay = getDay;
