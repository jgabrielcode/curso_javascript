import 'core-js'
import 'regenerator-runtime'

import { gerarSenha } from './app.js'

const btGenerate = document.querySelector("#generate")

btGenerate.addEventListener("click", () => gerarSenha() )

const btClear = document.querySelector("#clear")

btClear.addEventListener("click",() => textArea.innerText = "" )



