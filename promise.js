// let myPromise = new Promise(function(resolve, reject) {
//   setTimeout(function() {
//     resolve();
//   }, 1000);
// });

// myPromise
//   .then(function() {
//     return 99;
//   })
//   .then(function(number) {
//     console.log(number);
//   });

//const randomNumberPromise = new Promise(function(resolve, reject){
const randomNumberPromise = new Promise((res,rej)=>{

  setTimeout(()=>{
    const randomVal = Math.random();

    if(randomVal > 0.5) {
      res(randomVal);
    } else if (randomVal <= 0.5) {
      rej(randomVal); // don't have to pass, but can for context
    }

  }, 1000);

});

randomNumberPromise.then((value)=>{
  console.log('Success!', value);
  console.log('complete');
}).catch((value)=>{
  console.log('Fail', value);
  console.log('complete');
})