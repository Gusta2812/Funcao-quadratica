// b^2 - 4 * a * c
function calcular(){
    let a = document.querySelector('input#numberA').value
    let b = document.querySelector('input#numberB').value
    let c = document.querySelector('input#numberC').value
    let result = document.querySelector('div.result')

    result.innerHTML = ''

    if(a == '' || b == '' || c == ''){
        alert('Preencha todo formulario')
        result.innerHTML = ''
    }

    else{
        let delta = ((b**2) - 4*a*c)
    
    let raiz = Math.sqrt(delta)
    let x1 = ((-b + raiz) / (2*a))
    let x2 = ((-b -  raiz) / (2*a))

    result.innerHTML = `Delta = ${delta} </br> X + = ${x1} </br>  X - = ${x2}`
    }

}



