const header = document.querySelector('header');

const navBar = () => {
  const user = JSON.parse(localStorage.getItem('userLog')) ||
  undefined;
  return (header.innerHTML = `
  <nav class="navbar bg-body-tertiary fixed-top">
  <div class="container-fluid">
  <a class="navbar-brand" href="index.html">
  <img src="./img/logo.jpg" alt="Bootstrap" width="50" height="40">
</a>    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Game Play</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
        ${
            user
              ? `
              <li class="nav-item">
              <a class="nav-link" href="./index.html">${user.userName}</a>
              </li>`
              : `
              <li class="nav-item">
              <a class="nav-link" href="./login.html">Ingresar</a>
              </li>
              `
          }
          ${
            user
              ? ''
              : `
              <li class="nav-item">
              <a class="nav-link" href="./register.html">Crear cuenta</a>
              </li>
              `
          }
          ${
            user?.role === 'ADMIN'
              ? `
              <li class="nav-item">
              <a class="nav-link" href="./admin.html">Administrador</a>
              </li>
              `
              : ''
          }
          ${
            user
              ? `
              <li class="nav-item">
              <button class="btn btn-danger" id='closeSession' onclick='localStorage.clear(), window.location.reload()'>Cerrar sesion</button>
              </li>
              `
              : ''
          }
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="./contact.html">Contacto</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./about-us.html">Acerca de nosotros</a>
          </li>
          </ul>
          </div>
          </div>
  </div>
</nav>`)
};

export default navBar;

// ${
//   user?.role === 'admin'
//     ? `
//     <li class="nav-item">
//       <a class="nav-link text-white" href="../index.html">MIS PELIS</a>
//     </li>
//     `
//     : ''
// }
