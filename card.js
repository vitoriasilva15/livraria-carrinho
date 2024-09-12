class CardNews extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        this.shadowRoot.innerHTML = `
            <style>
                .card {
                    cursor: pointer;
                    transition: box-shadow 0.3s;
                    width: 100%; 
                    max-width: 18rem; 
                    border: 1px solid #ddd; 
                    border-radius: 0.5rem; 
                    overflow: hidden; 
                    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); 
                    margin-bottom: 1rem; 
                }
                .card:hover {
                    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
                }
                .card img {
                    width: 100%; 
                    height: auto; 
                    object-fit: cover; 
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
                    color: #555;
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
