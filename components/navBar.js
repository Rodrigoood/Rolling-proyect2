const header = document.querySelector('header');

const navBar = () => {
  const user = localStorage.getItem('userLog') ||
  undefined;
  return (header.innerHTML = `

  <nav class="navbar bg-body-tertiary fixed-top">
  <div class="container-fluid">
  <a class="navbar-brand" href="index.html">
  <img src="./img/logo-gamer.png" alt="Bootstrap" width="50" height="40">
</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          ${user ? '' : `
            <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="register.html">Crear cuenta</a>            
          </li>
          `}
          ${user ? '' : `
          <li class="nav-item">
            <a class="nav-link" href="login.html">Iniciar sesion </a>
          </li>
          `}
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Ver mas
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" target="_blank" href="about-us.html">Acerca de nosotros</a></li>
              <li><a class="dropdown-item" target="_blank" href="contact.html">Contacto</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              ${user ? '' : `
              <li><a class="dropdown-item disabled" href="#">Administrador</a></li>
              `}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
      `)
}

export default navBar;
