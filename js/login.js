import { getFormData, messages } from './utils.js';


const loginCheck = async (e) => {
  e.preventDefault();
  const messageForm = document.getElementById('message');
  messageForm.textContent = '';


  const formObject = getFormData(e);

  
  try {
    const resp = await fetch(
      `http://localhost:3000/users?email=${formObject.email}`
    );
    const data = await resp.json();
    const userExist = data[0] || [];
    if (userExist.length === 0)
      return (messageForm.textContent = messages.userNotExist);
    if (
      userExist.email === formObject.email &&
      userExist.password === formObject.password
    ) {
      localStorage.setItem('userLog', JSON.stringify(userExist));
      window.location.href = '../index.html';
    } else {
      messageForm.textContent = messages.userOrPasswordBad;
    }
  } catch (error) {
    console.log(error);
  }

};

document
  .getElementById('loginForm')
  .addEventListener('submit', loginCheck, false);