
function acaoBotao() {
 var sairLoop, valor1, valor2
 do{
    valor1 = parseInt(prompt("Digite o primeiro valor: "))
    valor2 = parseInt(prompt("Digite o segundo valor: "))
    document.getElementById("paragrafo").innerText = "Resultado: " + (parseInt(valor1) + parseInt(valor2));
    sairloop = prompt("Deseja sair? S/N")
 }  while( sairloop == "N" ) 
    
}
