alert('Olá seja bem vindo(a)!')
const retornoUsuario = confirm('Vamos interagir?')

if(retornoUsuario){
    let nome = prompt("Escreva seu nome") 
    alert('A quantidade de caracteres no seu nome é ' + nome.length) 
}else{
     alert("Que pena! Você parecia ser uma pessoa mais legal :(")
     window.close()
}



