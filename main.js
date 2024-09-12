async function getData() {
    try {
        const res = await fetch('http://localhost:3000/produtos');
        const json = await res.json();
        return json;
    } catch (erro) {
        console.log(erro);
    }
}

let produtos = await getData();
console.log(produtos)

function renderizar(value) {
    const panel = document.querySelector('#product-panel');
    let card = "";
    const p = value ? produtos.filter(p => p.titulo.includes(value)) : produtos;
    for (let produto of p) {
        card += `
            <div class="col-3">
                <card-news text="${produto.titulo.length > 20 ? `${produto.titulo.substring(0, 20)}...` : produto.titulo}" value="R$ ${produto.preco}" id="${produto.id}" src="${produto.imagem}"></card-news>
            </div>
        `;
    }
    panel.innerHTML = card;
}

renderizar();

const search = document.querySelector('#search');
search.addEventListener('keyup', (event) => {
    renderizar(event.target.value);
});

async function categoria(value) {
    try {
        const res = await fetch(`http://localhost:3000/produtos?category=${value}`);
        const json = await res.json();
        produtos = json;
        renderizar();
    } catch (err) {
        console.log(err)
    }
}

async function cresc() {
    try {
        const res = await fetch('http://localhost:3000/produtos?sort=asc');
        const json = await res.json();
        produtos = json;
        renderizar();
    } catch (err) {
        console.log(err)
    }
}

async function decresc() {
    try {
        const res = await fetch('http://localhost:3000/produtos?sort=desc');
        const json = await res.json();
        produtos = json;
        renderizar();
    } catch (err) {
        console.log(err)
    }
}

window.cresc = cresc;
window.decresc = decresc;
window.categoria = categoria;
