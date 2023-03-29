const peca = "torre";
let resultado;

switch(peca)
{
    case "peão":
        resultado = "Andar uma posição para frente e capturar pela diagonal uma posição à frente";
        break;

    case "torre":
        resultado = "Andar e capturar em qualquer posição na horizontal e vertical";
        break;

    case "bispo":
        resultado = "Andar e capturar em qualquer posição na diagonal";
        break;
    
    case "cavalo":
        resultado = "Andar e capturar em formato de 'L' (anda 3 peças até alguma posição desde que o caminho formado até ela tenha um formato de L)"
        break;

    case "rainha":
        resultado = "Andar e capturar em qualquer posição na horizontal, vertical e diagonal";
        break;

    case "rei":
        resultado = "Andar e capturar em todas as posições adjascentes à sua";
        break;

    default:
        resultado = "Peça inválida!";
}

console.log(resultado);