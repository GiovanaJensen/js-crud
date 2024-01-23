import { clienteService } from '../service/cliente-service.js'
const criarNovaLinha = (nome, email, id) => {
    const linhaNovaCliente = document.createElement('tr');
    const conteudo = `
    <td class="td" data-td>${nome}</td>
                <td>${email}</td>
                <td>
                    <ul class="tabela__botoes-controle">
                        <li><a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
                        <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
                    </ul>
                </td>
    `
    linhaNovaCliente.innerHTML = conteudo;
    linhaNovaCliente.dataset.id = id;
    return linhaNovaCliente
}

const tabela = document.querySelector('[data-tabela]');

tabela.addEventListener('click', (evento) => {
    let ehBotaoDeletar = evento.target.className == "botao-simples botao-simples--excluir";
    if(ehBotaoDeletar){
        const linhaCliente = evento.target.closest('[data-id]');
        let id = linhaCliente.dataset.id;
        clienteService.removeCliente(id)
        .then( () => {
            linhaCliente.remove();
        })
    }
})

clienteService.listaClientes()
.then(data => {
    data.forEach(elemento => {
        tabela.appendChild(criarNovaLinha(elemento.nome, elemento.email, elemento.id));
    });
});