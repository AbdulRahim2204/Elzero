let myAdmins = ['Ahmed', 'Osama', 'Sayed', 'Stop', 'samera'];
let myEmployees = ['Amgad', 'Samah', 'Ameer', 'Omar', 'Othman', 'Orwe', 'Salhe', 'Samia', 'Anwar'];

let i = 0;
let adminsNumber = [];

while (myAdmins[i] != 'Stop') {
  adminsNumber.push(myAdmins[i]);
  i++;
}

document.write(`<h1> We have ${adminsNumber.length} Admins</h1>`)

let j = 0;
while (j < adminsNumber.length) {
  document.write(`<hr><p>The Admin for the team ${j+1} ${adminsNumber[j]}</p>`);
  document.write(`<h2>Team members:</h2>`);

  let k = 0;
  let emp = 1;

  while (k < myEmployees.length) {

    if (myEmployees[k].startsWith(adminsNumber[j].slice(0, 1))) {
      document.write(`<p>-${emp} ${myEmployees[k]}</p>`);
      emp++
    }
    k++;
  }

  j++;
}