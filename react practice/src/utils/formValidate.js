export const validateUsername = (username) => {
  const validRegex = /^[a-zA-Z0-9_]+$/;
  if (!username) {
    return "Please enter username";
  } else if (username.length < 3 || username.length > 20) {
    return "Username must be between 3 and 20 characters long";
  } else if (!validRegex.test(username)) {
    return "Username can only contain letters, numbers and underscore";
  }
};

export const validatePassword = (password) => {
  const validRegex = /^(?=.*[a-z]).{5,}$/;
  if (!password) {
    return "please enter a password";
  } else if (!validRegex.test(password)) {
    return "password must contain at least one lowercase, uppercase, and must be at least 5 characters long";
  }
};
