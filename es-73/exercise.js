
function printAsyncName(callback, name) {
  //we are here now the second step
  setTimeout(() => console.log(name), 2000);
  // but it will wait for 2 second
  
  // till that time we are here 
  setTimeout(() => callback(), 1000);
  
}
printAsyncName(() => console.log("Hello"), "Develhopers!");//we call printAsyncName function here