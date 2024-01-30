let mes = prompt('Print Number From - To', 'Examole: 5-20').split('-');

let from = mes.pop(), to = mes.pop()

for (let i = Math.min(from, to); i <= Math.max(from, to); i++){
  console.log(i);
}

// ################################################################################################
let colors = document.querySelectorAll('li');
let container = document.querySelector('.container');

if (localStorage.getItem('color')) {
  container.style.backgroundColor = localStorage.getItem('color')
  colors.forEach( color => {
    color.classList.remove('active');
  });
  document.querySelector(`[data-color='${localStorage.getItem('color')}']`).classList.add('active')
}

colors.forEach( color => {

  color.addEventListener('click', (e) =>{

    colors.forEach(color => {
      color.classList.remove('active')
    });
    e.target.classList.add('active');
    localStorage.setItem('color', e.target.dataset.color);
    container.style.backgroundColor = localStorage.getItem('color');
  })
})


// ################################################################################################
