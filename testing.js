let fontFamily = document.getElementById('font');
let fontSize = document.getElementById('size');
let color = document.getElementById('color');

fontFamily.value = localStorage.getItem('font family');
fontSize.value = localStorage.getItem('font size');
color.value = localStorage.getItem('color');

document.body.style = `
  font-family: ${localStorage.getItem('font family') ? localStorage.getItem('font family') : fontFamily.value};
  font-size: ${localStorage.getItem('font size') ? localStorage.getItem('font size') : fontSize.value}px;
  color: ${localStorage.getItem('color') ? localStorage.getItem('color') : color.value};
`;

fontFamily.addEventListener('change', (e) => {
  localStorage.setItem('font family', e.target.value);
  document.body.style.fontFamily = localStorage.getItem('font family');
});

fontSize.addEventListener('change', (e) => {
  localStorage.setItem('font size', e.target.value);
  document.body.style.fontSize = localStorage.getItem('font size') + 'px';
});

color.addEventListener('change', (e) => {
  localStorage.setItem('color', e.target.value);
  document.body.style.color = localStorage.getItem('color');
});