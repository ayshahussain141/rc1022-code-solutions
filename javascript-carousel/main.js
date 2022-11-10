var iconOne = document.querySelector('.one');
var iconTwo = document.querySelector('.two');
var iconThree = document.querySelector('.three');
var iconFour = document.querySelector('.four');
var dark = document.querySelector('.dark');
var image = document.querySelector('img');

var content = 1;
setInterval(function () {
  content++;
  // console.log(content);
  if (content === 1) {
    image.setAttribute('src', 'images/025.png');
    dark.className = 'fa-solid fa-circle dark';
    iconFour.className = 'fa-regular fa-circle one';
  }
  if (content === 2) {
    image.setAttribute('src', 'images/007.png');
    iconOne.className = 'fa-solid fa-circle dark';
    dark.className = 'fa-regular fa-circle one';
  }
  if (content === 3) {
    image.setAttribute('src', 'images/001.png');

    iconTwo.className = 'fa-solid fa-circle dark';
    iconOne.className = 'fa-regular fa-circle one';

  }
  if (content === 4) {
    image.setAttribute('src', 'images/004.png');
    iconThree.className = 'fa-solid fa-circle dark';
    iconTwo.className = 'fa-regular fa-circle one';

  } if (content === 5) {
    iconFour.className = 'fa-solid fa-circle dark';
    iconThree.className = 'fa-regular fa-circle one';
    image.setAttribute('src', 'images/039.png');
    content = 0;
  }
}, 3000);

dark.addEventListener('click', function (event) {
  image.setAttribute('src', 'images/025.png');
  content = 1;
  dark.className = 'fa-solid fa-circle dark';
  iconTwo.className = 'fa-regular fa-circle one';
  iconThree.className = 'fa-regular fa-circle one';
  iconOne.className = 'fa-regular fa-circle one';
  iconFour.className = 'fa-regular fa-circle one';

});

iconOne.addEventListener('click', function (event) {
  image.setAttribute('src', 'images/007.png');
  content = 2;
  event.target.className = 'fa-solid fa-circle dark';
  iconTwo.className = 'fa-regular fa-circle one';
  iconThree.className = 'fa-regular fa-circle one';
  iconFour.className = 'fa-regular fa-circle one';
  dark.className = 'fa-regular fa-circle one';

});

iconTwo.addEventListener('click', function (event) {
  image.setAttribute('src', 'images/001.png');
  content = 3;
  event.target.className = 'fa-solid fa-circle dark';
  iconThree.className = 'fa-regular fa-circle dark';
  iconFour.className = 'fa-regular fa-circle one';
  iconOne.className = 'fa-regular fa-circle one';
  dark.className = 'fa-regular fa-circle one';
});

iconThree.addEventListener('click', function (event) {
  image.setAttribute('src', 'images/004.png');
  content = 4;
  iconThree.className = 'fa-solid fa-circle dark';
  iconFour.className = 'fa-regular fa-circle one';
  iconTwo.className = 'fa-regular fa-circle one';
  dark.className = 'fa-regular fa-circle one';
  iconOne.className = 'fa-regular fa-circle one';
});

iconFour.addEventListener('click', function () {
  image.setAttribute('src', 'images/039.png');
  content = 5;
  iconFour.className = 'fa-solid fa-circle dark';
  iconTwo.className = 'fa-regular fa-circle one';
  dark.className = 'fa-regular fa-circle one';
  iconOne.className = 'fa-regular fa-circle one';
  iconThree.className = 'fa-regular fa-circle dark';

});

var previous = document.querySelector('.previous');
var next = document.querySelector('.next');
next.addEventListener('click', function (event) {
  if (content <= 5) {
    content++;
    if (content === 1) {
      image.setAttribute('src', 'images/025.png');
      dark.className = 'fa-solid fa-circle dark';
      iconFour.className = 'fa-regular fa-circle one';
    }
    if (content === 2) {
      image.setAttribute('src', 'images/007.png');
      iconOne.className = 'fa-solid fa-circle dark';
      dark.className = 'fa-regular fa-circle one';
    }
    if (content === 3) {
      image.setAttribute('src', 'images/001.png');
      iconTwo.className = 'fa-solid fa-circle dark';
      iconOne.className = 'fa-regular fa-circle one';

    }
    if (content === 4) {
      image.setAttribute('src', 'images/004.png');
      iconThree.className = 'fa-solid fa-circle dark';
      iconTwo.className = 'fa-regular fa-circle one';

    } if (content === 5) {
      iconFour.className = 'fa-solid fa-circle dark';
      iconThree.className = 'fa-regular fa-circle one';
      image.setAttribute('src', 'images/039.png');
      content = 0;
    }
  }
});

previous.addEventListener('click', function (event) {
  if (content <= 5) {
    if (content === 0) {
      content = 5;
    }
    if (content === 1) {
      image.setAttribute('src', 'images/025.png');
      dark.className = 'fa-solid fa-circle dark';
      iconOne.className = 'fa-regular fa-circle one';
      content = 0;
    }
    if (content === 2) {
      image.setAttribute('src', 'images/007.png');
      iconTwo.className = 'fa-regular fa-circle one';
      iconOne.className = 'fa-solid fa-circle one';
      content = 1;

    }
    if (content === 3) {
      image.setAttribute('src', 'images/001.png');
      iconTwo.className = 'fa-solid fa-circle dark';
      iconThree.className = 'fa-regular fa-circle one';
      content = 2;
    }
    if (content === 4) {
      image.setAttribute('src', 'images/004.png');
      iconThree.className = 'fa-solid fa-circle dark';
      iconFour.className = 'fa-regular fa-circle';
      content = 3;

    } if (content === 5) {
      iconFour.className = 'fa-solid fa-circle dark';
      dark.className = 'fa-regular fa-circle one';
      image.setAttribute('src', 'images/039.png');
      content = 4;
    }
  }
});
