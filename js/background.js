const images = ["1.jpg", "2.jpg", "3.jpg"];

const randomImg = images[Math.floor(Math.random() * images.length)];

// console.log(randomImg);

const backgroundImg = document.createElement("img");

backgroundImg.src = `img/${randomImg}`;

// console.log(backgroundImg);

document.body.appendChild(backgroundImg);
