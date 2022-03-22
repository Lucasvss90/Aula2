nota1 = 8
nota2 = 9
nota3 = 9
nota4 = 9


var media = (nota1+nota2+nota3+nota4)/4;
console.log(media)

if (media >= 7){
    console.log("Aluno Aprovado")

} else if (media >= 5) {
    console.log("Aluno Recuperação")

} else {
    console.log("Aluno Reprovado")
}