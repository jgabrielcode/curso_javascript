
const frm = document.querySelector("form")

const arr = []
frm.addEventListener("submit",(e)=>{
    e.preventDefault()
    const nome = frm.inNome.value
    arr.push(nome)
    const jsonData = JSON.stringify(arr)
    console.log(jsonData)
    console.log(typeof jsonData)

    localStorage.setItem("nomes",js)
})