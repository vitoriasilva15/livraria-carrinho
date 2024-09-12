class CardNews extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        // Definir estilos para o card
        this.shadowRoot.innerHTML = `
            <style>
                .card {
                    cursor: pointer;
                    transition: box-shadow 0.3s;
                    width: 100%; /* Ajuste para ocupar toda a largura da coluna */
                    max-width: 18rem; /* Ajuste conforme necessário */
                    border: 1px solid #ddd; /* Adicione uma borda se desejar */
                    border-radius: 0.5rem; /* Adicione bordas arredondadas se desejar */
                    overflow: hidden; /* Garante que nada "vaze" para fora do card */
                    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); /* Adicione uma sombra leve */
                    margin-bottom: 1rem; /* Espaçamento inferior entre os cards */
                }
                .card:hover {
                    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
                }
                .card img {
                    width: 100%; /* Ocupa a largura total do card */
                    height: auto; /* Mantém a proporção da imagem */
                    object-fit: cover; /* Ajusta a imagem para cobrir o espaço do container */
                }
                .card-body {
                    padding: 1rem;
                    text-align: center;
                }
                .card-title {
                    font-size: 1.25rem;
                    margin-bottom: 0.5rem;
                }
                .card-text {
                    color: #555; /* Cor do texto para valor do produto */
                }
            </style>
            <div class="card">
                <img src="${this.getAttribute('src')}" alt="Product Image">
                <div class="card-body">
                    <h5 class="card-title">${this.getAttribute('text')}</h5>
                    <p class="card-text">${this.getAttribute('value')}</p>
                </div>
            </div>
        `;

        this.addEventListener('click', () => {
            const id = this.getAttribute('id');
            window.location.href = `produto.html?produtoId=${id}`;
        });
    }
}

customElements.define('card-news', CardNews);
