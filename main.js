const toggleTheme = document.querySelector('.mode');
const theme = document.querySelector('body');
const selectedColor = document.querySelector('select');

const clearClass = () => theme.removeAttribute('class');
const addClass = (className) => theme.classList.add(className);
const colorSelected = () => theme.classList.value;

toggleTheme.addEventListener('click', () => {
  const color = colorSelected();
  clearClass();
  if (color === 'blue' || color === 'pink' || color === 'yellow') {
    addClass(`dark-${color}`);
  } else {
    if (color.includes('pink') | color.includes('blue') | color.includes('yellow')) {
      const result = color.split('-');
      addClass(result[1]);
    } else {
      addClass('pink');
    }
  }
});

selectedColor.addEventListener('change', () => {
  clearClass();
  addClass(selectedColor.value);
})