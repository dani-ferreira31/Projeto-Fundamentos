const lista = document.getElementById("lista-lugares");

if(lista){
lugares.forEach(lugar => {
lista.innerHTML += `
<div class="card">
<img src="${lugar.imagem}">
<h2>${lugar.nome}</h2>
<a href="lugar.html?id=${lugar.id}">
Ver detalhes
</a>
</div>
`;
});
}

function pegarParametro(nome){
const url = new URLSearchParams(window.location.search);
return url.get(nome);
}

const id = pegarParametro("id");

if(id){

const lugar = lugares.find(l => l.id == id);

document.getElementById("nomeLugar").innerText = lugar.nome;
document.getElementById("imagemLugar").src = lugar.imagem;
document.getElementById("descricaoLugar").innerText = lugar.descricao;

document.getElementById("mapaLugar").href = lugar.mapa;

}


