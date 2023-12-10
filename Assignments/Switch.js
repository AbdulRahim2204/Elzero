let job = 'Manager';
let salary = 0;

switch (job) {
  case 'Manager':
    salary = 8000;
    console.log(salary);
    break;

  case 'IT':
  case 'Support':
    salary = 6000
    console.log(salary);
    break;
  case 'Developer':
  case 'Designer' :
    salary = 7000;
    console.log(salary);
    break;

  default:
    salary = 4000
    console.log(salary);
    break;
}