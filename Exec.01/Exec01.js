    // Função chamada pelo "body onload "
    function carregar(){
    // Variável que vai escrever na div com id "horas"
    var now = document.querySelector('div#horas')
    // variável que será responsável por carregar a foto
    var srcimg = document.getElementById('srcimagem')
    // variável que vai capturar um dado do SO
    var agora = new Date();
    // variável usada na estrutura condicional
    var hora = agora.getHours();
    hora = 13
    // Mensagens que irão concatenar com o innerText após as estrutura
    if (hora < 6) { 
        now.innerHTML = 'Boa madrugada, '
        //srcimg é a variável - "src = " é o local de onde a foto será carregada
        srcimg.src = 'arquivos/fotonoite.jpg' // foto a ser carregada
        //comando para trocar a cor do fundo em JavaScript
        document.body.style.background = '#798562';
    }
    else if (hora < 12) {
        now.innerHTML = 'Bom dia, ' 
        srcimg.src = 'arquivos/fotomanha.jpg' // foto a ser carregada
        document.body.style.backgroud = '#294152'
    }
    else if (hora < 18) {
        now.innerHTML = 'Boa tarde, '
        srcimg.src = 'arquivos/fototarde.jpg' // foto a ser carregada
        document.body.style.background = '#adf9c6'
    }
    else {
        now.innerHTML = 'Boa noite, '
        srcimg.src = 'arquivos/fotonoite.jpg' // foto a ser carregada
        document.body.style.background = '#515154';
    }
     // Comando que será mostrado na "<div id = "horas""
    now.innerText += ` agora são ${agora.getHours()}:${agora.getMinutes()}`
    }