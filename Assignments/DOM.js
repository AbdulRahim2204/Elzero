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