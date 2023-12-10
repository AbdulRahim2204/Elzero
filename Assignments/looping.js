let products = ['Keybord', 'Mouse', 'Pen', 'pad', 'Monitor', 'iPhone'];
let color = ['Red', 'Green', 'Blue'];

let showCount = 2;

document.write(`<h1>Showing ${showCount} Products:</h1>`);

for(let i=0; i<showCount; i++){
  document.write(`<div>`);
  document.write(`<h2>[${i+1}] ${products[i]}<h2>`);

  // for(let j=0; j<color.length; j++){
  //   document.write(`<p>- ${color[j]}</p>`)
  // }
  document.write(`<p>${color.join(' | ')}</p>`)
  document.write(`</div>`)
}
