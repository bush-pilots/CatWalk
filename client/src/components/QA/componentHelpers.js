const formatDate = (date) => {
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const day = date.slice(8, date.indexOf('T'));
  const month = monthNames[Number(date.slice(6, 7)) - 1];
  const year = date.slice(0, 4);
  const formattedDate = `${month} ${day}, ${year}`;
  return formattedDate;
};

const validateInputs = (inputs) => {
  if (inputs.questionOrAnswer.length === 0 || inputs.nickname.length === 0 || inputs.email.length === 0) {
    return false;
  } if (inputs.questionOrAnswer.length > 1000 || inputs.nickname.length > 60 || inputs.email.length > 60) {
    return false;
  }
  return true;
};

const validateEmail = (email) => {
  const validEmailRegex = RegExp(
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );

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
