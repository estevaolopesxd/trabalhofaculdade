const inputHello = document.getElementById("helloNome")
const btnHello = document.getElementById("btnHello")
const btnEnviar = document.getElementById("enviar")
const btnID = document.getElementById('btnID')
const spaceID = document.getElementById('spaceID')

const sectionHello = document.getElementById("hello")
const cadastro = document.getElementById("cadastro")
const lista = document.getElementById("listaCadastrados")
const showName = document.getElementById("showName")





btnHello.addEventListener("click" , () => {
    let nameHello = inputHello.value

    console.log(nameHello)


    sectionHello.classList.add("d-none")
    cadastro.classList.remove("d-none")
    showName.innerHTML = nameHello + "!"

})
let n = 0

btnID.addEventListener('click', () => {
   

    spaceID.value = Math.floor(Math.random() * 20)
 

})