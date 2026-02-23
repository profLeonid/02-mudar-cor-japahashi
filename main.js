"use strict"

    const botaoTrocaCor = document.getElementById("botao-troca-cor")

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
    


    botaoTrocaCor.addEventListener('click' , trocarCor)
 

