let requestURL = './dataBase.json';

let imgDiv = document.querySelector('.game__imageContainer__img');

const plantsArray = fetch(requestURL).then((response) => response.json());
// .then(function (data) {
//   return defImg(data);
// });

function defImg(toto) {
  console.log(toto);
  imgDiv.src = toto[0].rose.url;
  console.log(imgDiv.src);
}

export { plantsArray };
