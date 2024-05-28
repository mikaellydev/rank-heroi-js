let nome = "James"
let experiencia = 2000
let rank


while (true) {
    if (experiencia <=  1000) {
        rank = "Ferro";
    }
    else if (experiencia > 1000 && experiencia <= 2000 ) {
        rank = "Bronze";
    }
    else if (experiencia > 2000 && experiencia <=  5000) {
        rank = "Prata";
    }
    else if (experiencia > 5000 && experiencia <= 7000) {
        rank = "Ouro";
    }
    else if (experiencia > 7000 && experiencia <=  8000) {
        rank = "Platina";
    }
    else if (experiencia > 8000 && experiencia <= 9000) {
        rank = "Ascendente";
    }
    else if (experiencia > 9000 && experiencia <= 10000) {
        rank = "Imortal";
    }
    else if (experiencia > 10.000) {
        rank = "Radiante";
    }

    break;
}

console.log("O Herói de nome " +(nome) + " está no nível de " +(rank))



