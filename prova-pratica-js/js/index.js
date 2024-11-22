function fazerPedido() {
    const nomeCliente = document.querySelector(".input-text input").value.trim();

    if (!nomeCliente) {
        alert("Por favor, preencha o nome antes de fazer o pedido.");
        return;
    }

    const saborselecionado = document.querySelector("input[name='sabor']:checked");
    if (!saborselecionado) {
        alert("Por favor, selecione o sabor da pizza.");
        return;
    }

    const tamanhoSelecionado = document.querySelector("input[name='tamanho']:checked");
    if (!tamanhoSelecionado) {
        alert("Por favor, selecione o tamanho da pizza.");
        return;
    }

    let precoPizza = 0;
    switch (tamanhoSelecionado.value) {
        case "Pequena":
            precoPizza = 25.00;
            break;
        case "Média":
            precoPizza = 35.00;
            break;
        case "Grande":
            precoPizza = 50.00;
            break;
    }

    const adicionaisSelecionados = document.querySelectorAll("input[name='adicionais']:checked");
    const precoAdicionais = adicionaisSelecionados.length * 5.00;

    const valorTotal = precoPizza + precoAdicionais;

    const valorTotalElemento = document.querySelector("#total h2 strong");
    valorTotalElemento.textContent = valorTotal;

    console.log(`Pedido realizado com sucesso por ${nomeCliente}`);
    console.log(`Tamanho: ${tamanhoSelecionado.value}`);
    console.log(`Adicionais: ${adicionaisSelecionados.length} (${Array.from(adicionaisSelecionados).map(adicional => adicional.value).join(", ")})`);
    console.log(`Valor Total: R$ ${valorTotal}`);
}