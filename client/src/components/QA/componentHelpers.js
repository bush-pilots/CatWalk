const formatDate = (date) => {
  const monthNames = ["January", "February", "March",  "April", "May", "June",  "July", "August", "September", "October", "November", "December"];
  let day = date.slice(8, date.indexOf('T'));
  var month = monthNames[Number(date.slice(6, 7)) - 1];
  var year = date.slice(0, 4);
  var formattedDate = `${month} ${day}, ${year}`;
  return formattedDate;
};

const validateInputs = (inputs) => {
  if (inputs.questionOrAnswer.length === 0 || inputs.nickname.length === 0 || inputs.email.length === 0) {
    return false;
  } else if (inputs.questionOrAnswer.length > 1000 || inputs.nickname.length > 60 || inputs.email.length > 60) {
    return false;
  }
  return true;
};

const validateEmail = (email) => {
  const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

  if (!validEmailRegex.test(email)) {
    return false;
  }

  return true;
};

module.exports = {
  validateInputs,
  formatDate,
  validateEmail
};