const footer = document.getElementById('pruebaFooter');

const myFooter = () => {
    return footer.innerHTML = `
    <div class="row container-fluid pt-3 m-0 mt-5">
        <div
          class="col-sm-4 p-0 d-flex justify-content-center align-items-center"
        >
          <img src="./img/LOGO" alt="logo" height="100px" width="100px" />
        </div>
        <div class="col-sm-4 p-0">
          <div>
            <div class="card-body">
              <h4 class="card-title text-center pb-2">
                Seguinos en Nuestras Redes
              </h4>
              <div class="d-flex justify-content-evenly pb-2">
                <div>
                  <a href="./Error 404.html"
                    ><img
                      src="./img/icons8-facebook-50.png"
                      alt="imgFace"
                      height="50px"
                      width="50px"
                  /></a>
                </div>
                <div>
                  <a href="./Error 404.html"
                    ><img
                      src="./img/icons8-instagram-50.png"
                      alt="imgInsta"
                      height="50px"
                      width="50px"
                  /></a>
                </div>
                <div>
                  <a href="./Error 404.html"
                    ><img
                      src="./img/icons8-twitter-circled-50.png"
                      alt="imgTwitter"
                      height="50px"
                      width="50px"
                  /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-4 p-0">
          <div>
            <div class="card-body">
              <h4 class="card-title pb-2">Soporte</h4>
              <div>
                <ul>
                  <a href="./Error 404.html" class="text-dark text-decoration-none"
                    ><li>Preguntas Frecuentes</li></a
                  >
                  <a href="./Error 404.html" class="text-dark text-decoration-none"
                    ><li>Politicas de Privacidad</li></a
                  >
                  <a href="./Error 404.html" class="text-dark text-decoration-none"
                    ><li>Terminos y Condiciones</li></a
                  >
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>`;
}

myFooter();
exports = {
  myFooter
};