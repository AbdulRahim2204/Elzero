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
