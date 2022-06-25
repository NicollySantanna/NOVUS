const handleSubmit = (event) => {
event.preventDefault();

const cliente = document.querySelector('input[name=cliente]').value;
const cnpj = document.querySelector('input[name=cnpj]').value;
const contato = document.querySelector('input[name=contato]').value;
const sistema = document.querySelector('input[name=sistema]').value;
const acesso = document.querySelector('input[name=acesso]').value;

fetch ('https://api.sheetmonkey.io/form/vwQP85hDBMQ5PDFW1pQjsa' , {

    method: 'post',
    headers:{
        'Accept': 'application/json',
        'Content-type': 'application/json'
    },
    body: JSON.stringify({cliente:cliente, cnpj:cnpj, contato:contato, sistema:sistema, acesso:acesso}),
});

}

document.querySelector("form").addEventListener('submit' , handleSubmit);

