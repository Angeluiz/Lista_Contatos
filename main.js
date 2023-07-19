const form = document.getElementById('form-contato');
const nome = []; //Criado este array [] para armazenar o nome dos contatos
const telefone = []; //Criado este array [] para armazenar o telefone dos contatos
const email = []; //Criado este array [] para armazenar o email dos contatos
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha () //Chama as funções quando clicar em submit
    atualizaTabela() 
});

form.addEventListener('reset', function(e) {
    window.location.reload(); //Realiza reload na pagina e limpa todas os contatos
});

function adicionaLinha () { //Criada uma função para adicionar linha, está função é chamada no addEventListener cada vez que o botão Submit for apertado.
    const inputNomeContato = document.getElementById('contato-nome');
    const inputTelefoneContato = document.getElementById('contato-telefone');
    const inputEmailContato = document.getElementById('contato-email');

    if (nome.includes(inputNomeContato.value)) { //Adicionando este if para verificar se o nome já existe no array "nome"
        alert(`O contato ${inputNomeContato.value} já existe na lista !!`);
    } else {
        nome.push(inputNomeContato.value); //.push para adicionar os valores no array criado
        telefone.push(inputTelefoneContato.value); //.push para adicionar os valores no array criado
        email.push(inputEmailContato.value); //.push para adicionar os valores no array criado
        
        let linha = '<tr>';
        linha += `<td><img src="./images/person.png" alt="Emoji Contato" /></td>`; //Utiliza += para concatenar (juntar) 
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputTelefoneContato.value}</td>`;
        linha += `<td>${inputEmailContato.value}</td>`;
        linha += '</tr>';
    
        linhas += linha;
    }
    inputNomeContato.value = '';
    inputTelefoneContato.value = '';
    inputEmailContato.value = '';
}

function atualizaTabela() { //Função para chamar a variavel linha e adicionar no corpo da tabela.
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}