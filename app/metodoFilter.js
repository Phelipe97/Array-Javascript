const botoes = document.querySelectorAll('.btn');
botoes.forEach(btn => btn.addEventListener('click', filtraLivros))

function filtraLivros() {
    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value;
    let livrosFilrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria);
    exibeLivros(livrosFilrados);
    if (categoria == 'disponivel') {
        const valorTotal = calcularTotalDeLivrosDisponiveis(livrosFilrados);
        exibeValorTotalLivrosDisponiveis(valorTotal)
    } else {

    }
}
function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibeValorTotalLivrosDisponiveis(valorTotal) {
    elementoValorTotalDeLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>

    `
}