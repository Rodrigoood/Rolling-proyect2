import { messages } from './utils.js';

const messageElement = document.getElementById('message');
  messageElement.textContent = '';

//----------Informacion de los imputs
 const registerForm = document.querySelector('#registerForm')
 registerForm.addEventListener('submit', (e)=>{
     e.preventDefault()
     const userName = document.querySelector('#userName').value
     const email = document.querySelector('#email').value
     const password = document.querySelector('#password').value
     const passwordCheck = document.getElementById('passwordCheck').value

     const Users = JSON.parse(localStorage.getItem('users')) || []
     const isUserRegistered = Users.find(user => user.email === email)
     if(isUserRegistered){
         return (messageElement.textContent = messages.userAlreadyExist)
        }
        
        //------- validacion regex 
        
    
    const validationPassword = /^(?=.*\d).{4,8}$/;
    
    //------- Regex test
    
    if (password !== passwordCheck) return (messageElement.textContent = messages.passwordCheckbad);

    if (!validationPassword.test(password)) {
        return (messageElement.textContent = messages.passwordRequirements)
    }


Users.push({name: userName, email: email, password: password})
localStorage.setItem('users', JSON.stringify(Users))
alert('Registro Exitoso!')
window.location.href = 'login.html'

})

