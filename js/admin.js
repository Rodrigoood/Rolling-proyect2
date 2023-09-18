import { juegos } from "./main.js"
let csgo = JSON.parse(localStorage.getItem(200))
let phasmo = JSON.parse(localStorage.getItem(201))
let dbd = JSON.parse(localStorage.getItem(202))
let re_4 = JSON.parse(localStorage.getItem(203))
let hoglegacy = JSON.parse(localStorage.getItem(204))
let gta_V = JSON.parse(localStorage.getItem(205))
let fallout_NV = JSON.parse(localStorage.getItem(206))
let YGO_MD = JSON.parse(localStorage.getItem(207))
let CoH2 = JSON.parse(localStorage.getItem(208))
let AoE3 = JSON.parse(localStorage.getItem(209))
let Stalker_2 = JSON.parse(localStorage.getItem(210))
let Stalker_SoC = JSON.parse(localStorage.getItem(211))

/*let juegos = [csgo, phasmo, dbd, re_4, hoglegacy, gta_V, fallout_NV, YGO_MD, CoH2, AoE3, Stalker_2, Stalker_SoC]*/
let index = juegos.findIndex(Object => Object.destacado === true)

function outstandinggame() {
    if (index != -1) {
        let xfavgame = JSON.parse(localStorage.getItem(juegos[index].codigo))
        xfavgame.destacado = false
        localStorage.setItem(xfavgame.codigo , JSON.stringify(xfavgame))
        Swal.fire({
        icon: 'success',
        title: 'Nice',
        text: 'Se elimino el juego como Destacado',
        footer: ''
    })
    setInterval(() => {
        window.location.reload()
    },5000)
    }
    if (index == -1) {
    let dest = parseInt(prompt('Ingrese el Codigo de su Juego Destacado'))
    let outstandgame = JSON.parse(localStorage.getItem(dest))
    if (outstandgame.destacado === true) {
        outstandgame.destacado = false
        localStorage.setItem(outstandgame.codigo, JSON.stringify(outstandgame))
        Swal.fire({
            icon: 'success',
            title: 'Nice',
            text: 'Se elimino el juego como Destacado',
            footer: ''
        })
    }
    if (isNaN(dest)) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingrese un Codigo Valido',
            footer: ''
        })
    } else {
        outstandgame.destacado = true
        localStorage.setItem(outstandgame.codigo, JSON.stringify(outstandgame))
        Swal.fire({
            icon: 'success',
            title: 'Nice',
            text: 'Se logro',
            footer: '',
        })
        setInterval(() => {
            window.location.reload()
        },5000)
    } 
}
}
function JuegoNuevo(titulo, codigo, categoria, descripcion, imgurl, publicado, destacado) {
   this.titulo = titulo;
   this.codigo = codigo;
   this.categoria = categoria;
   this.descripcion = descripcion;
   this.imgurl = imgurl;
   this.publicado = publicado;
   this.destacado = destacado;
}
/*
function JuegoNew() {
    let nombre = prompt('Ingrese el Titulo del Juego')
    let codigo = parseInt(prompt('Ingrese el Codigo del Juego'))
    let categoria = (prompt('Ingrese la Categoria del Juego')).toLowerCase()
    let descripcion = prompt('Ingrese una Descripcion del Juego')
    let imgjuego = prompt('Ingrese una URL de la imagen del juego')
    let publicado = false
    let destacado = false
    if (isNaN(codigo)) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingrese un numero valido!',
            footer: ''
        })
    }
    if (nombre.length === 0) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingrese algo en el campo!',
            footer: ''
        })
    }
    if (categoria.length === 0) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingrese algo en el campo!',
            footer: ''
        })
    }
    if (descripcion.length === 0) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingrese algo en el campo!',
            footer: ''
        })
    }
    if (imgjuego.length === 0) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingrese algo en el campo!',
            footer: ''
        })
    }
    let newgame = new JuegoNuevo(nombre, codigo , categoria , descripcion , imgjuego , publicado , destacado)
    Swal.fire({
        icon: 'success',
        title: 'New Game Added',
        text: '',
        footer: ''
    })
    if(newgame) {
        juegos.push(newgame)
        let New_game = JSON.stringify(newgame)
        localStorage.setItem(newgame.codigo, New_game)
    }
}
*/
const addgame = document.querySelector('#newgameadd')
addgame.addEventListener('submit', (e)=>{
    e.preventDefault()
    const title = document.querySelector('#code').value
    const codigo = document.querySelector('#title').value
    const categoria = document.querySelector('#category').value
    const description = document.querySelector('#description').value
    const img_url = document.querySelector('#urlimg').value
    const publish = false
    const destacado = false
    let newgame = new JuegoNuevo(title, codigo , categoria , description , img_url , publish , destacado)
    juegos.push(newgame)
    if(newgame) {
        let New_game = JSON.stringify(newgame)
        localStorage.setItem(newgame.codigo, New_game)
    }
})
function eliminarjuego() {
    let num = parseInt(prompt('Ingrese el codigo del juego'))
    let delgame = JSON.parse(localStorage.getItem(num))
    delgame.publicado = false
    localStorage.setItem(delgame.codigo, JSON.stringify(delgame))
    Swal.fire({
        icon: 'success',
        title: 'Nice',
        text: 'Se logro',
        footer: '',
    })
    setInterval(() => {
        window.location.reload()
    },5000)
}
function añadirjuego() {
    let num = parseInt(prompt('Ingrese el codigo del juego'))
    let delgame = JSON.parse(localStorage.getItem(num))
    delgame.publicado = true
    localStorage.setItem(delgame.codigo, JSON.stringify(delgame))
    Swal.fire({
        icon: 'success',
        title: 'Nice',
        text: 'Se logro',
        footer: '',
    })
    setInterval(() => {
        window.location.reload()
    },5000)
} 
function editarjuego() {
     let code = parseInt(prompt('Ingrese el codigo del juego'))
    if (isNaN(code)) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingrese un Codigo Valido',
            footer: ''
        })
    }
    let aver = JSON.parse(localStorage.getItem(code))
    if (aver === null) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El Codigo ingresado no existe o es erroneo',
            footer: ''
        })
    }
    else {
    let game = prompt('Que Desea cambiar?')
    if (game === null) {
        Swal.fire({
            icon: 'info',
            title: 'Oops...',
            text: 'Se Cancelo la Operacion!',
            footer: ''
        })
    } else {
        game = game.toLowerCase()
        switch (game) {
            case "titulo":
                const title = prompt('Ingrese el Titulo')
                aver.titulo = title
                localStorage.setItem(aver.codigo, JSON.stringify(aver))
                Swal.fire({
                    icon: 'success',
                    title: 'OK!',
                    text: 'Se Edito el Titulo Correctamente',
                    footer: ''
                })
                break;
            case "categoria":
                const category = prompt('Ingrese la Categoria')
                aver.categoria = category
                localStorage.setItem(aver.codigo, JSON.stringify(aver))
                Swal.fire({
                    icon: 'success',
                    title: 'OK!',
                    text: 'Se Edito la Categoria Correctamente',
                    footer: ''
                })
                break;
            case "imgurl":
                const imggame = prompt('Ingrese la URL')
                aver.imgurl = imggame
                localStorage.setItem(aver.codigo, JSON.stringify(aver))
                Swal.fire({
                    icon: 'success',
                    title: 'OK!',
                    text: 'Se Edito el url de la Imagen Correctamente',
                    footer: ''
                })
                break;
            case "codigo":
                const codigo_1 = prompt('Ingrese el codigo')
                aver.codigo = codigo_1
                localStorage.setItem(aver.codigo, JSON.stringify(aver))
                Swal.fire({
                    icon: 'success',
                    title: 'OK!',
                    text: 'Se Edito el Codigo correctamente',
                    footer: ''
                })
                break;
            case "descripcion":
                const description = prompt('Ingrese la descripcion')
                aver.descripcion = description
                localStorage.setItem(aver.codigo, JSON.stringify(aver))
                Swal.fire({
                    icon: 'success',
                    title: 'OK!',
                    text: 'Se Edito la Descripcion Correctamente',
                    footer: ''
                })
                break;
            default:
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'No existe la propiedad ingresada!',
                    footer: ''
                })
                break;
        }
        }
    }
    console.log(aver)
}

const contenido = document.getElementById('tablacuerpo')
const printTabla = (list) => {
    juegos.map((juegos, i) => {
        contenido.innerHTML += `              <tr>
        <td>${juegos.codigo}</td>
        <td>${juegos.titulo}</</td>
        <td>${juegos.categoria}</</td>
        <td>${juegos.descripcion}</</td>
        <td>${juegos.imgurl}</</td>
        <td>${juegos.publicado}</</td>
        <td>${juegos.destacado}</</td>
      </tr>`
    });
}
printTabla(juegos)

/*
const newGame = document.getElementById('nuevojuego')
newGame.addEventListener('click', JuegoNew , false)
*/
const addGame = document.getElementById('añadirjuego')
addGame.addEventListener('click', añadirjuego , false)

const removeGame = document.getElementById('borrarjuego')
removeGame.addEventListener('click', eliminarjuego , false)

const editGame = document.getElementById('editarjuego')
editGame.addEventListener('click', editarjuego , false)

const destGame = document.getElementById('juegodest')
destGame.addEventListener('click', outstandinggame , false)