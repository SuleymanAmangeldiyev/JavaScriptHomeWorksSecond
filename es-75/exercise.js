

let repeatHello = (callback) => {
  let repeat = setInterval(callback, 1000);
  setTimeout(() => clearInterval(repeat), 6000);
};

const printHello = () => console.log("Hello");

repeatHello(printHello);
