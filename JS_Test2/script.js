const randomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const renderLight = () => {
  const number = randomInteger(min, max);

  $p.innerHTML = `Turning on the light number ${number}`;

  $imgContainer.innerHTML = '';
  lightArr.forEach((lightNumber) => {
    const $img = document.createElement('img');
    if (lightNumber === number) {
      $img.setAttribute('src', './assets/on.png');
      $img.setAttribute('alt', 'Light on');
    } else {
      $img.setAttribute('src', './assets/off.png');
      $img.setAttribute('alt', 'Light off');
    }
    $img.classList.add('light-img');
    $imgContainer.appendChild($img);
  });
};

const min = 1;
const max = 10;
const lightArr = Array.from({ length: max }, (_, i) => i + 1);

const $container = document.querySelector('.container');

const $imgContainer = document.createElement('div');
$container.appendChild($imgContainer);

const $p = document.createElement('p');
$container.appendChild($p);

const $button = document.createElement('button');
$button.innerHTML = 'RANDOM';
$button.classList.add('random-button');
$container.appendChild($button);
$button.addEventListener('click', () => {
  renderLight();
});

// First render
renderLight();
