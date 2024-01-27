for (let i = 0; i < 100; i++) {
    // product container
    let product = document.createElement('div');
    product.classList.add('product');

    // product title
    let productTitle = document.createElement('h2');
    productTitle.classList.add('productTitle');
    productTitle.appendChild(document.createTextNode(`Product ${i+1} title`));

    // product details
    let productDetails = document.createElement('p');
    productDetails.appendChild(document.createTextNode(`Product ${i+1} details`));

    product.appendChild(productTitle);
    product.appendChild(productDetails);

    document.body.appendChild(product);
    document.body.appendChild(document.createTextNode('#########################################'));
}

// #################################################################################################
let form1 = document.getElementById('form1');

form1.onsubmit = (e) => {
  let userName = document.getElementsByName('userName')[0];
  let userAge = document.getElementsByName('userAge')[0];

  if (!(userName.value && userAge.value && userName.value.length <= 10)) {
    e.preventDefault();
  } else {
    console.log('submited');
  }
}

// #################################################################################################
let inputFeild = document.getElementsByName('userName')[0];
let text = document.getElementById('text');

inputFeild.addEventListener('input', (e) => {
  text.textContent = e.target.value
});

// ################################################################################################
let divEle1 = document.getElementById('elzero');
let divEle2 = document.getElementsByClassName('element')[0];
let divEle3 = document.getElementsByName('js')[0];
let divEle4 = document.getElementsByTagName('div')[0];
let divEle8 = document.querySelector('[name="js"]');
let divEle13 = document.querySelectorAll('div');

let imgDiv = document.querySelectorAll('[decoding="async"]')

imgDiv.forEach( img => {
  img.src = 'https://elzero.org/wp-content/themes/elzero/imgs/logo.png';
  img.alt = 'Elzero logo'
} )

let usdInput = document.getElementsByName('dollar')[0];
let result = document.getElementsByClassName('result')[0];

usdInput.addEventListener( 'input', e => {
  result.textContent = `{${usdInput.value}} USD = {${usdInput.value * 15.6}} Egyption Pound`;
})

// ##################################################################################################
let one = document.getElementsByClassName('one')[0];
let tow = document.getElementsByClassName('tow')[0];

one.title = tow.title;
tow.title = tow.classList[tow.classList.length - tow.classList.length];

one.textContent = one.title
tow.textContent = tow.title
// #####################################################################################
let img = document.getElementsByTagName('img');

for (let i=0; i<img.length; i++){
  if (img[i].getAttribute('alt') === ''){
    img[i].alt = 'Elzero New';
  } else {
    img[i].alt = 'Old';
  }
}


// ####################################################################################
let form = document.forms[0];
let container = document.querySelector('.results');

form.onsubmit = function(e){
  e.preventDefault();

  let numOfShape = form.elements.value;
  let shapeText = form.texts.value;
  let shape = form.type.value;
  
  while(container.children.length > 0){
    container.children[0].remove();
  }
  

  for(let i=0; i<numOfShape; i++){
    let newShape = document.createElement(shape);
    newShape.textContent = shapeText + ` ${i+1}`;

    container.appendChild(newShape);
  }

  form.elements.value = '';
  form.texts.value = '';
}

// ##################################################################################
// body style
document.body.style = `
  width: 100%;
  height:100vh;
  box-sizing: border-box;
  margin: 0;
  font-family: monospace;
`;

// Creating the header element and style it and append it inside the page body
let header = document.createElement('header');
header.style = `
  width: 100%;
  height: 8%;
  box-sizing: border-box;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
document.body.appendChild(header);

// Cereating The page logo and style it and append it inside the header element
let logo = document.createElement('h1');
logo.style = `
  color: #22A96D;
  font-weight: bolder;
`;

logo.textContent = 'Abdulrahim';
header.appendChild(logo);

// Creating the nav bar links container and style it and append it inside the header element
let navBar = document.createElement('ul');
navBar.style = `
  width: 20%;
  list-style: none;
  display: flex;
  justify-content: space-between;
`;
header.appendChild(navBar);

let navBarLinksText = ['Home', 'About', 'Service', 'Contact'];

for (let i=0; i<4; i++){
  let item = document.createElement('li');

  let link = document.createElement('a');
  link.href = '#';
  link.textContent = navBarLinksText[i];
  link.style = `
  text-decoration: none;
  font-size: 18px;
  color: #5d5d5d;
  `;

  item.appendChild(link);
  navBar.appendChild(item)
}

// creating the main part of the page
let mainPart = document.createElement('main');
document.body.appendChild(mainPart);

mainPart.style = `
  width: 100%;
  height: 87%;
  background-color: #eee;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-content: space-evenly;
`;

for(let j=0; j<15; j++){
  let container = document.createElement('div');
  
  container.style = `
  width: calc(95% / 3);
  background-color: white;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-around;
  `;
  
  let num = document.createElement('h2');
  num.textContent = j+1;
  container.appendChild(num);
  
  let title = document.createElement('p');
  title.textContent = 'Product'
  container.appendChild(title);
  
  mainPart.appendChild(container);
}


// creating the footer and style it
let footer = document.createElement('footer');
footer.style = `
  width: 100%;
  height: 5%;
  background-color: #22A96D;
  line-height: 170%;
  color: white;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

footer.textContent = 'Copyright 2024'
document.body.appendChild(footer);


// #####################################################################################
let but = document.getElementById('scrollUp');

but.onclick = () => {
  if(window.scrollY >= 500) {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: 'smooth'
    })
  }
}