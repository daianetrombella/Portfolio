//HORA DO DIA
function carregar (){
    var mesg = window.document.getElementById ('msg')
    var img = window.document.getElementById ('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 21
    mesg.innerText = `Agora são ${hora} horas`
    mesg.style.textAlign = 'center'
    if (hora >= 6 && hora <=12) {
        document.body.style.backgroundColor = '#F2C299'
        img.src = 'imagens/hora-do-dia/manha.png'
    } else if (hora >= 12 && hora <= 18 ) {
        document.body.style.backgroundColor = '#F2B544'
        img.src = 'imagens/hora-do-dia/tarde.png'
    } else {
        img.src = 'imagens/hora-do-dia/noite.png'
        document.body.style.backgroundColor = '#3CA69B'
    }
} 

//VERIFICADOR DE IDADE
function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert ('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName ('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute ('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute ('src', 'imagens/detector/crianca-m.png')
            } else if (idade < 27){
                //jovem
                img.setAttribute('src', 'imagens/detector/jovem-m.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute ('src', 'imagens/detector/adulto-m.png')
            } else {
                //idoso
                img.setAttribute ('src', 'imagens/detector/idoso-m.png')
            }
        } else if (fsex[1].checked){
            genero ='mulher'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute ('src', 'imagens/detector/crianca-f.png')
            } else if (idade < 27){
                //jovem
                img.setAttribute ('src', 'imagens/detector/jovem-f.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute ('src', 'imagens/detector/adulto-f.png')
            } else {
                //idoso
                img.setAttribute ('src', 'imagens/detector/idosa-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos</p>`
        res.appendChild(img)
        
    }
}

//CONTADOR
function contagem() {
    var beggin = document.getElementById('inc')
    var end = document.getElementById('fimm')
    var passo = document.getElementById('pass')
    var res = document.getElementById('res')
    if (beggin.value.lenght == 0 || end.value.lenght == 0 || passo.value.lenght == 0) {
        window.alert('Impossivel contar')

    } else {
        res1.innerHTML = 'Contando:'
        var i = Number(beggin.value)
        var e = Number(end.value)
        var p = Number(passo.value)
        if (i < e) {
            //contagem crescente
            for (var c = i; c <= e; c += p) {
                res1.innerHTML += ` ${c}  \u{21E2}`

            }
            res1.innerHTML += `\u{1F6A9}`
        } else {
            //contagem regressiva
            for (var c = i; c >= e; c -= p) {
                res1.innerHTML += ` ${c}  \u{21E2}`
            }
            res1.innerHTML += `\u{1F6A9}`
        }



    }
}

//TABUADA
function tabuada(){
    var num = document.getElementById ('numero')
    var tab = document.getElementById ('seltab')
    if (num.value.length == 0) {
        window.alert ('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement ('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
    
        }
    }
    
    }
