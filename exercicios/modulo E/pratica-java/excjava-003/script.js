function contar() {
    let inicio = document.getElementById('iinicio')
    let fim = document.getElementById('ifim')
    let passos = document.getElementById('ipasso')
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passos.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossível Contar!'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passos.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considere pular a partir do número 1 :) ')
            p = 1
        }
        if (i < f) {
            // CONTAGEM CRESCENTE
            for(let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F938}`
            }
        } else {
            // CONTAGEM REGRASSIVA
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F938}`
            }
        }
        res.innerHTML += ` \u{1F6A9} Fim \u{1F6A9}`
    }
}