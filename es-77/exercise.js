const isLogged = true;

const validateLogging = (isLogged) =>
  new Promise((resolve, reject) => {
    if (isLogged) resolve(Math.random());
    else reject(new Error("User is not logged in"));
  });

const checkNumber = (number) =>
  new Promise((resolve, reject) => {
    if (typeof number !== "number")
      reject(new Error(`${number} is not a number`));
    else if (number > 0.5) resolve({ name: "John", age: 24 });
    else reject(new Error(`${number} is less than 0.5`));
  });

const getUserInfo = (validatation, ss, isLogged) => {
  validatation(isLogged)
    .then((n) => checkNumber(n))
    .then((Info) => console.log(Info))
    .catch((err) => console.log(err));
};

getUserInfo(validateLogging, checkNumber, isLogged);
