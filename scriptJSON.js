let requestURL = "./dataBase.json";

let imgDiv = document.querySelector(".game__plant__image__img");



fetch(requestURL)
  .then((response) => response.json())
  .then(function (data) {
    return defImg(data);
  });

function defImg(toto) {
  imgDiv.src = toto[0].rose.url;
  console.log(img.src);
}
