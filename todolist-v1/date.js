// jshint es version 6. I don't know will this work for me or not
exports.getDate = () => {
  const today = new Date();
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  return today.toLocaleDateString("en-in", options);
};

exports.getDay = () => {
  const today = new Date();
  const options = {
    weekday: "long",
  };
  return today.toLocaleDateString("en-in", options);
};
