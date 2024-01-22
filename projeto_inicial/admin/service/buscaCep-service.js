const btnPesquisarCEP = document.querySelector('#btnPesquisar');
btnPesquisarCEP.addEventListener('click', event => {
    event.preventDefault();
    const inputDoCep = document.querySelector('#cep');
    const valorDoCep = inputDoCep.value;

    const url = `https://viacep.com.br/ws/${valorDoCep}/json/`;

    fetch(url).then(response =>{
        return response.json();
            })
        .then(data =>{
            if(data.erro){
                alert('O cep está inválido');
                return ;
            }else{
                atribuirCamposDoCEP(data);
            }
        })
})

function atribuirCamposDoCEP(data){
    const inputDaRua = document.querySelector('#rua');
    const inputDoComplemento = document.querySelector('#complemento');
    const inputDoBairro = document.querySelector("#bairro");
    const inputDaCidade = document.querySelector('#cidade');
    const inputDoEstado = document.querySelector('#estado');

    inputDaRua.value = data.logradouro;
    inputDoComplemento.value = data.complemento;
    inputDoBairro.value = data.bairro;
    inputDaCidade.value =  data.localidade;
    inputDoEstado.value = data.uf;
}