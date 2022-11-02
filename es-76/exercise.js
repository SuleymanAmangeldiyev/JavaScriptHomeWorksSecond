
let p = new Promise((resolve, reject) => {
const number = 15;

  if(number > 10){
    resolve("It has resolved: ");
  }else{
    reject("It has rejected: ");
  }
});


p.then((messeage) => console.log(messeage)).catch((messeage) => console.log(messeage));

