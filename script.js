function insert(num) {
    // Parte de inserção 
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function clean() {
    // Parte de limpeza
    document.getElementById('resultado').innerHTML = "";
}