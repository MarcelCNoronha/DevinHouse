var usuario = {
    username: 'douglas#Cavalcante',
    qtd_seguidores: 20,
    qtd_pessoas_seguindo: 20,
    nome: 'Henrique Douglas C. Costa',
    qtd_publicacoes: 1000,
    foto: 'https://avatars.githubusercontent.com/u/95543728?v=4',
}

var listaSeguidores = [
    'douglas',
    'henrique',
    'cavalcante'
]

function exibirNome() {
    listaSeguidores.forEach(item => {
        console.log(item)
    }
)}


function mostrarInformacoes() {
    document.getElementById('nome').innerText = usuario.nome
    document.getElementById('username').innerText = usuario.username
    document.getElementById('qtd_seguidores').innerText = usuario.qtd_seguidores
    document.getElementById('qtd_publicacoes').innerText = usuario.qtd_publicacoes
}

window.onload = mostrarInformacoes