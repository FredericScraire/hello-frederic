const button = document.getElementById('greet-button');
const heading = document.getElementById('greeting');
const countDisplay = document.getElementById('click-count');
const historyList = document.getElementById('history-list');

let clickCount = 0;
const clickHistory = [];

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

function renderHistory() {
  let listHTML = '';
  for (let i = 0; i < clickHistory.length; i++) {
    listHTML += `<li>${clickHistory[i]}</li>`;
  }
  historyList.innerHTML = listHTML;
}

button.addEventListener('click', () => {
  clickCount = clickCount + 1;

  const greeting = getGreetingMessage(clickCount);
  heading.innerHTML = withBlueFirstLetters(greeting);
  countDisplay.textContent = getCountMessage(clickCount);

  clickHistory.push(`Clic ${clickCount} : ${greeting}`);
  renderHistory();
});
