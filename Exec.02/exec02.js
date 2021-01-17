function verificar() {
    var data = new Date()
    // variável ano pegará os 4 digitos de ano
    var ano = data.getFullYear()
    // variável que irá guardar o ano preenchido no formulário
    var fAno = document.getElementById('txtano')
    // resposta
    var res = document.querySelector('div#res')
    // criação de uma tag para carregar a imagem
    var img = document.createElement('img')
    // setando identificação na variável dinâmica
    img.setAttribute('id', 'foto')

    if (fAno.value.length == 0 || fAno.value > ano) // valor não preenchido ou maior que o ano atual
    {
        window.alert('Verifique os dados e tente novamente!')
    } else { // formulário preenchido corretamente
        
        var fsex = document.getElementsByName('radsex') // [0] = masc [1] = fem
        var idade = ano - Number(fAno.value) // fAno.value convertido para fazer subtração
        var genero = '' // variável que irá guardar o Sexo selecionado
        if (fsex[0].checked) { // Assumindo que é homem
            genero = 'Homem' 
            if (idade < 13) img.setAttribute('src','arquivos/criançaM.JPG')
            else if (idade < 24) img.setAttribute('src', 'arquivos/jovemM.jpg')
            else if (idade < 60) img.setAttribute('src', 'arquivos/adultoM.jpg')
            else img.setAttribute('src', 'arquivos/idoso.jpg')
        } // fim da condição masculina

        else {  // Assumindo que é mulher
            genero = "Mulher" 
            if (idade < 13) img.setAttribute('src','arquivos/criançaF.JPG')
            else if (idade < 24) img.setAttribute('src', 'arquivos/jovemF.jpg')
            else if (idade < 60) img.setAttribute('src', 'arquivos/adultoF.jpg')
            else img.setAttribute('src', 'arquivos/idosa.jpg')
        } // fim da condição feminina

        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        // comando para mostrar uma tag criada dinamicamente
        res.appendChild(img)
    }



}