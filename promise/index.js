// Promise adalah alternatif callback

// PROMISE
// let janji = new Promise((resolve, reject) => {
//   try {
//     resolve("fullfilled");
//   } catch (err) {
//     reject(err);
//   }
// });

// // console.log(typeof janji);

// janji
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// cara 2
function janjiKamu() {
  return new Promise((resolve, reject) => {
    try {
      resolve("Janji Kamu terpenuhi");
    } catch (err) {
      reject(err);
    }
  });
}

// console.log(janjiKamu());
janjiKamu()
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
