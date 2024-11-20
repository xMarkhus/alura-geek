import { productCrud } from "./productCrud.js";

const productsContainer = document.querySelector("[data-products]");
const form = document.querySelector("[data-form]");

function createCard({ name, price, image, id }) {
    // Cria o elemento div principal
    const card = document.createElement("div");
    card.classList.add("card__container-info"); // Define a classe
  
    // Define o conteúdo HTML dentro da div
    card.innerHTML = `
      <img src="${image}" alt="Imagem de ${name}" class="card__image">
      <h3 class="card__title">${name}</h3>
      <div class="card__container-value">
        <p class="card__price">$ ${price}</p>
        <button class="card__delete" aria-label="Excluir Produto" data-id="${id}">
          <img src="./assets/icone-lixeira.png" alt="Ícone de exclusão">
        </button>
      </div>
    `;
  
    addEventDelete(card, id);

    return card; // Retorna o elemento criado
}

// Função para adicionar o evento de exclusão
function addEventDelete(card, id) {
    const deleteButton = card.querySelector(".card__delete");

    deleteButton.addEventListener("click", async () => {
        // Confirmação de exclusão
        const confirmDelete = window.confirm("Tem certeza que deseja excluir este produto?");
        
        if (confirmDelete) {
            // Exclui o produto
            await productCrud.deleteProduct(id);
            
            // Exibe um alert confirmando a exclusão
            alert(`Produto ${card.querySelector(".card__title").textContent} excluído com sucesso!`);

            // Remove o card do DOM
            card.remove();

            // Verifica se há produtos no container
            checkEmptyProducts();
        }
    });
}

// Função para verificar se o container está vazio
function checkEmptyProducts() {
    if (productsContainer.children.length === 0) {
        const noProductsMessage = document.createElement("p");
        noProductsMessage.textContent = "Não há produtos cadastrados";
        noProductsMessage.classList.add("no-products-message");
        productsContainer.appendChild(noProductsMessage);
    }
}

async function renderProducts() {
    try {
        // Obtém a lista de produtos do serviço productCrud
        const listProducts = await productCrud.productList();

        // Se não houver produtos, exibe a mensagem
        if (listProducts.length === 0) {
            const noProductsMessage = document.createElement("p");
            noProductsMessage.textContent = "Não há produtos cadastrados";
            noProductsMessage.classList.add("no-products-message");
            productsContainer.appendChild(noProductsMessage);
        } else {
            // Renderiza cada produto existente
            listProducts.forEach((product) => {
                const productCard = createCard(product);
                productsContainer.appendChild(productCard);
            });
        }

        // Adiciona o listener para o envio do formulário
        form.addEventListener("submit", async (event) => {
            event.preventDefault(); // Impede o comportamento padrão do formulário

            // Obtém os valores do formulário
            const name = document.querySelector("[data-name]").value;
            const price = document.querySelector("[data-price]").value;
            const image = document.querySelector("[data-image]").value;

            // Cria um novo produto no sistema
            const newProduct = await productCrud.createProduct(name, price, image);
            
            // Cria e adiciona o card do novo produto na interface
            const newCard = createCard(newProduct);
            productsContainer.appendChild(newCard);

            // Reseta o formulário para limpar os campos
            form.reset();
        });
    } catch (error) {
        console.error("Erro ao renderizar produtos:", error);
    }
}

// Chama a função para renderizar os produtos
renderProducts();
