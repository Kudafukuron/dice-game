let isPlayed = localStorage.getItem('isPlayed');

if (isPlayed != null) {
  let firstNum = Math.floor(Math.random() * 6) + 1, secondNum = Math.floor(Math.random() * 6) + 1;

  let header = document.querySelector('.container h1'), content;
  if (firstNum > secondNum) content = 'First Player Wins';
  else if (firstNum < secondNum) content = 'Second Player Wins';
  else content = 'Draw';

  header.textContent = content;

  let firstImage = document.querySelector('img.img1'), secondImage = document.querySelector('img.img2');
  firstImage.setAttribute('src', 'dice' + firstNum + '.png');
  secondImage.setAttribute('src', 'dice' + secondNum + '.png');
}

localStorage.setItem('isPlayed', true);