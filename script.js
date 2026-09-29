const button = document.getElementById('greet-button');
const heading = document.getElementById('greeting');
const countDisplay = document.getElementById('click-count');

let clickCount = 0;

function getGreetingMessage(count) {
  if (count >= 20) {
    return 'Ok, impressionnant.';
  } else if (count >= 5) {
    return "Tu ne vas pas t'arrêter, hein ?";
  } else {
    return 'You clicked the button!';
  }
}

function withBlueFirstLetters(text) {
  return text
    .split(' ')
    .map(word => `<span class="first-letter">${word[0]}</span>${word.slice(1)}`)
    .join(' ');
}

function getCountMessage(count) {
  if (count >= 5) {
    return `Wow, ${count} clics ! Tu es un champion du clic.`;
  } else {
    return `Cliqué ${count} fois`;
  }
}

button.addEventListener('click', () => {
  clickCount = clickCount + 1;

  heading.innerHTML = withBlueFirstLetters(getGreetingMessage(clickCount));
  countDisplay.textContent = getCountMessage(clickCount);
});
