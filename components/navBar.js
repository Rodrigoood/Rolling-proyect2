const header = document.querySelector('header');

const navBar = () => {
  const user = localStorage.getItem('userLog') ||
  undefined;
  return (header.innerHTML = `
  <ul class="nav justify-content-end">
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
</ul>`)

}

export default navBar;
