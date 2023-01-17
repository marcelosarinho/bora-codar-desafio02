// function spinImage() {
//   const sofaDiv = document.querySelector(".sofa-div");
//   const sofaImage = document.querySelector(".sofa-image");
//   const stopSpinImage = document.createElement("img");
//   const spinningSofaImage = document.createElement("img");

//   stopSpinImage.src = "./assets/vectorStroke.png";
//   stopSpinImage.classList.add("stop-spin-image");
//   sofaDiv.replaceChild(stopSpinImage, spinButton);
//   spinningSofaImage.src = "./assets/sofaBoraCodar.gif";
//   spinningSofaImage.classList.add("spinning-sofa-image");
//   sofaDiv.replaceChild(spinningSofaImage, sofaImage);
// }

function spinImage(e) {
  if(e.target.classList.contains("stop-spin-image")) {
    spinButton.src = "./assets/vector.png";
    spinButton.classList.remove("stop-spin-image");
    sofaImage.classList.remove("spinning-sofa-image");
    sofaImage.src = "./assets/image2.png";
  } else {
    spinButton.src = "./assets/vectorStroke.png";
    spinButton.classList.add("stop-spin-image");
    sofaImage.classList.add("spinning-sofa-image");
    sofaImage.src = "./assets/sofaBoraCodar.gif"
  }
}

const spinButton = document.querySelector(".spin-image");
spinButton.addEventListener("click", spinImage);

const sofaImage = document.querySelector(".sofa-image");