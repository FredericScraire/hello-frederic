const button = document.getElementById('greet-button');
const heading = document.getElementById('greeting');

function withBlueFirstLetters(text) {
  return text
    .split(' ')
    .map(word => `<span class="first-letter">${word[0]}</span>${word.slice(1)}`)
    .join(' ');
}

button.addEventListener('click', () => {
  heading.innerHTML = withBlueFirstLetters('You clicked the button!');
});
