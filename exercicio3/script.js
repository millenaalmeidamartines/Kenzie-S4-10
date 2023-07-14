function par(n) {
    if (n % 2 === 0) {
        return true;
    }
    return false;
}

function impar(n) {
    if (n % 2 !== 0) {
        return true;
    }
    return false;
}

function letrasProdutos(produto) {
    const tamanhoProduto = produto.length; // tem um valor para ser contado

    if (par(tamanhoProduto)) {
        return `O número de letras deste produto é par`;
    } else if (impar(tamanhoProduto)) {
        return `O número de letras deste produto é ímpar`;
    }   
}

console.log(letrasProdutos("cafeteiras"));