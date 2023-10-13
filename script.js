function contando() {

    var ini = document.getElementById('inicio').value
    var iniint = Number(ini)
    var fim = document.getElementById('fim').value
    var fimint = Number(fim)
    var passo = document.getElementById('passo').value
    var passoint = Number(passo)
    var contagem = document.querySelector('#contador')
    var resultado = ''
    
    for(var c = iniint; c <= fimint; c += passoint) {
        resultado += `${c} 👉 `
    }
    contagem.innerHTML = `${resultado}... 🏁 `
}
