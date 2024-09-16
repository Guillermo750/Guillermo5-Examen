const boton = document.getElementById('boton') //ESTO CREARÁ UNA VARIABLE Y VA A LLAMAR AL ID QUE ESTÁ DEFINIDO EN EL BUTTON
const menu = document.getElementById('menu') //ESTO CREARÁ UNA VARIABLE Y VA A LLAMAR AL ID QUE ESTÁ DEFINIDO EN EL MENÚ

/* FUNCIÓN DEL BOTÓN */
boton.addEventListener("click", () => {
    menu.classList.toggle("hidden")
})
