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
function popUp() {
  let popUpContainer = document.createElement('div');
  popUpContainer.style = `
    width: 400px;
    height: 150px;
    background-color: #ddd;
    border-radius: 1px;
    position: fixed;
    top: 35%;
    left: 35%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  `;
  popUpContainer.onclick = () => {
    document.body.removeChild(popUpContainer);
  }

  let closePopUp = document.createElement('div');
  closePopUp.textContent = 'x'
  closePopUp.style = `
    background-color: red;
    border-radius: 0 0 1px 0;
    font-size: 18px;
    font-weight: bold;
    color: white;
    cursor: pointer;
    padding: 0 7px 3px;
    position: fixed;
    top: 35%;
    right: 39%;
  `;

  let popUpTitle = document.createElement('h1');
  popUpTitle.textContent = 'Welcome';

  let popUpMessage = document.createElement('p');
  popUpMessage.textContent = 'Welcome to Abdulrahim Popup';
  popUpMessage.style = `
    margin-top: 20px;
    font-size: 18px;
  `;

  popUpContainer.appendChild(popUpTitle);
  popUpContainer.appendChild(popUpMessage);
  popUpContainer.appendChild(closePopUp);
  document.body.appendChild(popUpContainer)
}

onload = popUp();


// ################################################################################################
let count = document.querySelector('div');

let timerIndex = setInterval( () => {
  if (count.textContent == 1){
    clearInterval(timerIndex);
  }
    --count.textContent
}, 1000);


// ################################################################################################
let count1 = document.querySelector('div');

let timerIndex1 = setInterval( () => {
  if (count1.textContent == 5){
    window.open('https://Elzero.org', '_blank', 'width=500,height=400,top=0,left=0');
    clearInterval(timerIndex1)
  }
    --count1.textContent
}, 1000);


// ################################################################################################
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


// ################################################################################################
let userName = document.getElementById('name');
let email = document.getElementById('email');
let job = document.getElementById('job');

userName.value = sessionStorage.getItem('user name') ? sessionStorage.getItem('user name') : userName.value;
email.value = sessionStorage.getItem('email') ? sessionStorage.getItem('email') : email.value;
job.value =sessionStorage.getItem('job') ? sessionStorage.getItem('job') : job.value;

userName.addEventListener('input', (e) => {
  sessionStorage.setItem('user name', e.target.value);
});

email.addEventListener('input', (e) => {
  sessionStorage.setItem('email', e.target.value);
});

job.addEventListener('change', (e) => {
  sessionStorage.setItem('job', e.target.value);
});


// ################################################################################################