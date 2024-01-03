const imageBox = [
  {
    id: 1,
    img: "/images/image-product-1.jpg",
  },
  {
    id: 2,
    img: "/images/image-product-2.jpg",
  },
  {
    id: 3,
    img: "/images/image-product-3.jpg",
  },
  {
    id: 4,
    img: "/images/image-product-4.jpg",
  },
];
const menu = document.getElementById("nav-links");
const open = document.getElementById("open-btn");
const close = document.getElementById("close-btn");
const navBar = document.getElementById("nav");

open.addEventListener("click", function () {
  menu.classList.add("toggle");
  document.body.classList.add("static");
});

close.addEventListener("click", function () {
  menu.classList.remove("toggle");
  document.body.classList.remove("static");
});
// for nav-bar scroll active
window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    navBar.classList.add("fixed");
  } else {
    navBar.classList.remove("fixed");
  }
});

// for image selection

const img1 = document.getElementById("img-1");
const img2 = document.getElementById("img-2");
const img3 = document.getElementById("img-3");
const img4 = document.getElementById("img-4");
const image = document.getElementById("image");

let current = 0;

window.addEventListener("DOMContentLoaded", function () {
  getCurrentTarget();
});

function getCurrentTarget() {
  const present = imageBox[current];
  image.src = present.img;
  imgBox.src = present.img;
}

img1.addEventListener("click", function () {
  current = 0;
  getCurrentTarget();
});

img2.addEventListener("click", function () {
  current = 1;
  getCurrentTarget();
});

img3.addEventListener("click", function () {
  current = 2;
  getCurrentTarget();
});

img4.addEventListener("click", function () {
  current = 3;
  getCurrentTarget();
});

//for previews class

const previews = document.getElementById("previews");

const imgs = previews.querySelectorAll(".img");
imgs.forEach(function (pic) {
  pic.addEventListener("click", function () {
    imgs.forEach(function (present) {
      if (present !== pic) {
        present.classList.remove("select");
      }
    });
    pic.classList.add("select");
  });
});

// for cart add

const cartText = document.getElementById("amount");
const cartBtn = document.querySelectorAll(".btn");

let i = 0;

cartBtn.forEach(function (btn) {
  btn.addEventListener("click", function () {
    if (btn.classList.contains("plus")) {
      i++;
    } else {
      i--;
    }
    cartText.textContent = i;
  });
});

// for light-box
const imageOne = document.getElementById("image-1");
const imageTwo = document.getElementById("image-2");
const imageThree = document.getElementById("image-3");
const imageFour = document.getElementById("image-4");
const imgBox = document.querySelector(".main-lightbox");

function getCurrentTargets() {
  const present = imageBox[current];
  imgBox.src = present.img;
}

imageOne.addEventListener("click", function () {
  current = 0;
  getCurrentTargets();
});

imageTwo.addEventListener("click", function () {
  current = 1;
  getCurrentTargets();
});

imageThree.addEventListener("click", function () {
  current = 2;
  getCurrentTargets();
});

imageFour.addEventListener("click", function () {
  current = 3;
  getCurrentTargets();
});

// for prev and next btn
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const imgBox2 = document.querySelector(".main2");

let shows = 0;

window.addEventListener("DOMContentLoaded", function () {
  currentTarget();
  getCurrentImage();
});

function currentTarget() {
  const showImage = imageBox[shows];
  imgBox2.src = showImage.img;
}

next.addEventListener("click", function () {
  shows++;
  if (shows > imageBox.length - 1) {
    shows = 0;
  }
  currentTarget();
});
prev.addEventListener("click", function () {
  shows--;
  if (shows < 0) {
    shows = imageBox.length - 1;
  }
  currentTarget();
});

const showLightBox = document.querySelector(".show-lightbox");
const light = document.getElementById("lightbox");
const closeLightBox = document.getElementById("close-lightbox");

showLightBox.addEventListener("click", function () {
  light.classList.add("visible");
});

closeLightBox.addEventListener("click", function () {
  light.classList.remove("visible");
});

const sources = document.querySelectorAll(".source");

sources.forEach(function (source) {
  source.addEventListener("click", function () {
    sources.forEach(function (present) {
      if (present !== source) {
        present.classList.remove("show");
      }
    });
    source.classList.add("show");
  });
});

// for moblie thumbnail

const mobileImage = document.querySelector(".mob-thumbnail");
const nextImage = document.querySelector(".mob-next");
const prevImage = document.querySelector(".mob-prev");

let curentImage = 0;

function getCurrentImage() {
  const currentImg = imageBox[curentImage];
  mobileImage.src = currentImg.img;
}
nextImage.addEventListener("click", function () {
  curentImage++;
  if (curentImage > imageBox.length - 1) {
    curentImage = 0;
  }
  getCurrentImage();
});
prevImage.addEventListener("click", function () {
  curentImage--;
  if (curentImage < 0) {
    curentImage = imageBox.length - 1;
  }
  getCurrentImage();
});
