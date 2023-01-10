// Fazer a parte de adição com teclas, ex + botão adicionar etc. 
// Melhorar o css tmb 



let res = 0
let restx = window.document.querySelector('h4#res')
// Fazendo a criaçao das variaveis de estado, usadas dps para o igual.
let est_som = 0
let est_sub = 0
let est_div = 0
let est_mul = 0

let primeiro = 1

function somar(){

    var txnum = window.document.querySelector('input#numero')
    var num = Number(txnum.value)

    res += num
    est_som = 1
    est_sub = 0
    est_div = 0
    est_mul = 0
    txnum.value = ""
    txnum.focus()
    return res, est_som, est_sub, est_div, est_mul
}  

function subtrair(){

    var txnum = window.document.querySelector('input#numero')
    var num = Number(txnum.value)

    if (primeiro == 1){
        primeiro = 0
        res += num
    }else{
        res -= num   
    }

    est_som = 0
    est_sub = 1
    est_div = 0
    est_mul = 0
    txnum.value = ""
    txnum.focus()
    return res, primeiro, est_som, est_sub, est_div, est_mul
}  

function dividir(){

    var txnum = window.document.querySelector('input#numero')
    var num = Number(txnum.value)
    if (primeiro == 1){
        primeiro = 0
        res += num
    }else{
        res = res / num 
    }
    
    est_som = 0
    est_sub = 0
    est_div = 1
    est_mul = 0
    txnum.value = ""
    txnum.focus()
    return res, primeiro, est_som, est_sub, est_div, est_mul
}  

function multiplicar(){

    var txnum = window.document.querySelector('input#numero')
    var num = Number(txnum.value)

    if (primeiro == 1){
        res += num
        primeiro = 0
    }else{
        res = res * num 
    }

    est_som = 0
    est_sub = 0
    est_div = 0
    est_mul = 1
    txnum.value = ""
    txnum.focus()
    return res, priemiro, est_som, est_sub, est_div, est_mul
}  
function resultado(){
    var txnum = window.document.querySelector('input#numero')
    var num = Number(txnum.value)

    
    
    if (est_som == 1){
        res = res + num
        restx.innerHTML = `O resultado foi <strong>${res}</strong>`
    }else if(est_sub == 1){
        res = res - num
        restx.innerHTML = `O resultado foi <strong>${res}</strong>`
    }else if(est_div == 1){
        res = res / num
        restx.innerHTML = `O resultado foi <strong>${res}</strong>`
    }else if(est_mul == 1){
        res = res * num
        restx.innerHTML = `O resultado foi <strong>${res}</strong>`
    }
}

function limpar(){
    var txnum = window.document.querySelector('input#numero')

    res = 0 
    
    txnum.value = ""
    restx.innerHTML = ""
    primeiro = 1
    return primeiro
}