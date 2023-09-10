const header = document.querySelector('header');

const navBar = () => {
  const user = localStorage.getItem('userLog') ||
  undefined;
  return (header.innerHTML = `

  <div>
  <ul class="nav justify-content-start px-4">
  <li>
  <img src="" />
  </li>
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
      </ul>
      </div>
      `)
}

export default navBar;
