const BASE_URL = "http://localhost:3000/products";

async function productList() {
    const response = await fetch(BASE_URL);
    const data = await response.json();

    return data;
}

async function createProduct(name, price, image) {
    const response = fetch(BASE_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({name, price, image}),
    });

    const data = response.json();

    return data;
}

async function deleteProduct(id) {
    await fetch(`${BASE_URL}/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    });
}

export const productCrud  = {
    productList,
    createProduct,
    deleteProduct,
}
