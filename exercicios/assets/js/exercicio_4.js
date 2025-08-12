const paragrafos = document.querySelector(".paragrafos")
const ps = paragrafos.querySelectorAll('p')

const styleBody = getComputedStyle(document.body)
const bacgroundBody = styleBody.backgroundColor

for(const p of ps){
    p.style.background = bacgroundBody
    p.style.color = "white"
}