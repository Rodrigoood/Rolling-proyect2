const header = document.querySelector('header');

const navBar = () => {
  const user = localStorage.getItem('userLog') ||
  undefined;
  return (header.innerHTML = `
  <div></div>
  <div>
  <ul class="nav justify-content-end px-5">
  <li class="nav-item">
  <a class="nav-link active" aria-current="page" href="index.html">Inicio</a>
  </li>
  ${
    user
    ?  ''
    : `
    <li class="nav-item">
    <a class="nav-link" href="./login.html">Login</a>
    </li>
    `}
    ${
      user 
      ? ''
      : `
      <li class="nav-item">
      <a class="nav-link" href="./regiser.html">Registro</a>
      </li>
      `}
      <li class="nav-item">
      <a class="nav-link" href="./contact.html">Contacto</a>
      </li>
      </ul>
      </div>
      `
)}

export default navBar;
