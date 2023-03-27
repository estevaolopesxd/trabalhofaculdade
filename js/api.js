const btnCep = document.getElementById("btnCep")
const endereco = document.getElementById("endereco")



btnCep.addEventListener('click' , () => {
   endereco.classList.remove("d-none")
   const cep = document.getElementById("cep").value

   console.log(cep.value)


   fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json())
   .then(data => {
    console.log(data)


    const logradouro = document.getElementById("logradouro")
    const bairro = document.getElementById("bairro")
    const uf = document.getElementById("uf")

    logradouro.value = data.logradouro
    bairro.value = data.bairro
    uf.value = data.uf
   })
})