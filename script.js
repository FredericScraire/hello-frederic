const button = document.getElementById('greet-button');
const heading = document.getElementById('greeting');

button.addEventListener('click', () => {
  heading.textContent = 'You clicked the button!';
});
