function acaoBotao() {
    let limite = parseInt(prompt ("Digite a quantidade de vezes que vai ser verificada a idade: "));
    let contador = 0;
    resultado = "";
    while(contador < limite){
        let nome = prompt("Digite o nome da pessoa: ");
        let idade = parseInt(prompt("Digite a idade do(a)" + nome + ": "));
        if (idade >= 18)
            resultado += nome + ", você é maior de idade!\n";
        else 
            resultado += nome + ", você é menor de idade!\n";   
        contador ++;
    } 
    document.getElementById("paragrafo").innerText = resultado;
}
