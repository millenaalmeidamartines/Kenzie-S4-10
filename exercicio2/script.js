function letraInicial(nome, sobrenome) {
    const primeiraLetraNome = nome[0].toUpperCase();
    const primeiraLetraSobrenome = sobrenome[0].toUpperCase();

    return `${primeiraLetraNome} e ${primeiraLetraSobrenome}`
}

function nomeCompleto() {
    const letrasIniciais = letraInicial("millena", "almeida");

    return `As letras iniciais do meu nome completo são ${letrasIniciais}`

}

console.log(nomeCompleto())