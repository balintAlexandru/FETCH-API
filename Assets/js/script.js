const listProducts = document.querySelector(".products-list");
const btn = document.querySelector("button");

btn.addEventListener('click', ()=> {
    showProducts();
})

const productsList = async() => {
    const response = await fetch('./Assets/JSON/products.json');
    if(response.status !== 200){
        throw new Error("Invalid Json file");
    }
    const data = await response.json();
    return data;
}

const showProducts = () => {
    productsList()
        .then(data => {
            data.forEach(product => {
                const card = document.createElement('div');
                const title = document.createElement('div');
                const content = document.createElement('p');
                const price = document.createElement('span');
                const image = document.createElement('img');
                image.setAttribute('src',`${product.image}`);
                card.classList.add('product');
                title.classList.add('title');
                price.classList.add('price');
                listProducts.appendChild(card);
                title.innerHTML = `${product.name}`;
                content.innerHTML = `${product.description}`;
                price.innerHTML = `Price: ${product.price}$`;
                card.appendChild(image);
                card.appendChild(title);
                card.appendChild(content);
                card.appendChild(price);
            })})
        .catch(err => {
          alert(err.message);
    });
}

