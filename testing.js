let colors = document.querySelectorAll('li');
let container = document.querySelector('container');

// console.log(colors[0]);

colors.forEach( color => {

  color.addEventListener('click', (e) =>{

    colors.forEach(color => {
      color.classList.remove('active')
    });
    e.target.classList.add('active');

    localStorage.setItem('color', e.target.dataset.color);
    container.style.backgroundColor = e.currentTarget.dataset.color;
  })
})

// e.target.dataset.color