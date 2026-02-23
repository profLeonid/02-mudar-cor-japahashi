"use strict"

    const botaoTrocaCor = document.getElementById("botao-troca-cor")
    const botaoVerde =document.getElementById("botao-verde")
    const botaoVermelho =document.getElementById("botao-vermelho")

    function trocarCor () {
        
        let corUsuario = document.getElementById("cor-usuario").value
        if(corUsuario == "vermelho"){
            corUsuario = "red"
        
        }else if(corUsuario == "verde"){
             corUsuario = "green"
        
        }else if(corUsuario == "azul"){
            corUsuario = "blue"
        
        }else if(corUsuario == "amarelo")
            corUsuario = "yellow"
        document.documentElement.style.setProperty("--color-bg" , corUsuario)
    }

    function corBotaoVerde (){
        let corUsuario = document.getElementById("cor-usuario").value
        corUsuario = "green"
        document.documentElement.style.setProperty("--color-bg" , corUsuario)
    }

    function corBotaoVermelho (){
        let corUsuario = document.getElementById("cor-usuario").value
        corUsuario = "red"
        document.documentElement.style.setProperty("--color-bg" , corUsuario)
    }

    botaoTrocaCor.addEventListener('click' , trocarCor)
    botaoVerde.addEventListener('click' , corBotaoVerde)
    botaoVermelho.addEventListener('click' , corBotaoVermelho)

