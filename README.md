# AluraGeek
![Screenshot 2024-09-27 095600](https://github.com/user-attachments/assets/98984f99-f8c9-4521-89c3-dbfbab83f2d2)



**AluraGeek** é uma aplicação web que permite aos usuários gerenciar uma lista de produtos. Os usuários podem **visualizar**, **adicionar** e **remover** produtos utilizando tecnologias frontend modernas e um servidor JSON simulado.

## 🔥 Funcionalidades

- **Visualizar** produtos existentes.
- **Adicionar** novos produtos fornecendo nome, preço e imagem.
- **Remover** produtos da lista.
- Manipulação dinâmica do DOM para atualizar produtos sem recarregar a página.
- Conexão com um servidor simulado utilizando **json-server** para realizar operações **CRUD**.

## 💻 Tecnologias Utilizadas

- **HTML5/CSS3**: Estrutura e design.
- **JavaScript (ES6 Modules)**: Lógica e interação.
- **json-server**: API RESTful simulada.
- **Fetch API**: Requisições HTTP.
- **BEM (Block Element Modifier)**: Metodologia para nomear classes CSS.

## 🚀 Instalação

### Pré-requisitos

- **Node.js** instalado.

### Passos

1. Clone este repositório:

   ```bash
   git clone https://github.com/seuusuario/alurageek.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd alurageek
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o servidor JSON:

   ```bash
   npm start
   ```

5. Abra `index.html` no seu navegador.

## 🗂️ Estrutura do Projeto

- **index.html**: Estrutura da aplicação.
- **styles/reset.css**: Reinício de estilos.
- **styles/style.css**: Estilos personalizados.
- **js/controllers/main.js**: Lógica para adicionar e remover produtos.
- **js/services/product-services.js**: Requisições HTTP (GET, POST, DELETE).
- **db.json**: Base de dados simulada para **json-server**.
- **package.json**: Dependências e scripts.

## 🛠️ API Simulada

**json-server** simula uma API RESTful com as seguintes rotas:

- `GET /products`: Lista os produtos.
- `POST /products`: Cria um novo produto.
- `DELETE /products/:id`: Remove um produto.

## 📋 Uso da Aplicação

1. **Visualizar Produtos**: Os produtos são carregados automaticamente do servidor simulado ao abrir a página.
   
2. **Adicionar Produto**: Preencha o formulário com o nome, preço e URL da imagem e clique em **"Enviar"**.
   
3. **Remover Produto**: Clique no ícone da lixeira para remover um produto.

---
Desenvolvido por Marcos Martins
