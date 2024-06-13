// addEventListener(two parmeter)

// _____________________________________________________________________________
// var btn = document.querySelector("button");
// console.log(btn);
// myh1 = document.querySelector("h1");

// btn.addEventListener("click", () => {
//   var res = +myh1.innerHTML + 3;
//   myh1.innerHTML = res;
// });
// _______________________________________________________________________________

// highlevelfunction

// var arr = ["marwan", "mohamed", "farook"];
// for (i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// arr.forEach((x, y, z) => {
//   console.log(x);
// });

// var x = () => {
//   console.log("marwan");
// };
// ______________________________________________________________________________________

// var time = new Date();

// console.log();

// setInterval(() => {
//   console.log("marwan");
// }, 1000);                                          to repeat the code

// setTimeout(() => {
//   console.log("marwan");
// }, 1000);                                         to add code for one time

// var btn = document.querySelector("button");

// var time = setInterval(() => {
//   console.log("marwan");
// }, 1000);

// btn.addEventListener("click", () => {
//   clearInterval(time);
// });

// var marwan = eval("1+1");
// console.log(marwan);
// _____________________________________________________________________________________________________

// clock task

var myh1 = document.querySelector("h1");

var thetime = "Am";

setInterval(() => {
  var mytime = new Date();
  var hour = mytime.getHours();
  var mints = mytime.getMinutes();
  var sec = mytime.getSeconds();
  var thetime = "Am";
  // ___________________________________________________

  if (hour > 12 && hour < 18) {
    thetime = "PM";
  }
  myh1.innerHTML = hour + ":" + mints + ":" + sec + ":" + thetime;

  // ___________________________________________________________________

  if (hour == 22 || hour == 23 || hour == 24) {
    var newhour = hour - 12;
    console.log(hour);
    myh1.innerHTML = newhour + ":" + mints + ":" + sec + ":" + thetime;
    if (mints < 10) {
      console.log("yes min");
      myh1.innerHTML =
        "0" + newhour + ":" + "0" + mints + ":" + sec + ":" + thetime;
      if (sec < 10) {
        console.log("yes sec");
        myh1.innerHTML =
          "0" + newhour + ":" + "0" + mints + ":" + "0" + sec + ":" + thetime;
      }
    } else if (sec < 10 && mints >= 10) {
      myh1.innerHTML =
        "0" + newhour + ":" + mints + ":" + "0" + sec + ":" + thetime;
    }
  }

  // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  if (hour <= 21) {
    var newhour = hour - 12;
    myh1.innerHTML = "0" + newhour + ":" + mints + ":" + sec + ":" + thetime;
    if (mints < 10) {
      console.log("yes min");
      myh1.innerHTML =
        "0" + newhour + ":" + "0" + mints + ":" + sec + ":" + thetime;
      if (sec < 10) {
        console.log("yes sec");
        myh1.innerHTML =
          "0" + newhour + ":" + "0" + mints + ":" + "0" + sec + ":" + thetime;
      }
    } else if (sec < 10 && mints >= 10) {
      myh1.innerHTML =
        "0" + newhour + ":" + mints + ":" + "0" + sec + ":" + thetime;
    }
  }
  // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
}, 1000);
