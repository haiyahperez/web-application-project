const form = document.querySelector("form");
const inventoryFlower= document.querySelector("ul")

function addFlower(name, color, origin, price, stock) {
    const li = document.createElement("li");
        li.classList.add("inventory-flower");
    if (name && color && origin && price) {
        li.innerHTML = 
            `<p><strong>Name:</strong> ${name} </p>
            <p><strong>Color:</strong> ${color} </p>
            <p><strong>Origin:</strong> ${origin}</p>
            <p><strong>Price:</strong> ${price}</p>`;
    const inStock = document.createElement("button");
        li.append(inStock)
    if (stock === "true") {
        inStock.classList.add("in-stock")
        inStock.textContent = "In Stock"
    } else {
        inStock.classList.add("out-stock")
        inStock.textContent = "Out of Stock"
    }
    inventoryFlower.append(li);
    const remove = document.createElement("button");
    li.append(remove)
    remove.textContent = "Remove flower"
    remove.addEventListener("click", () => {
        li.remove();
    })
}
}


function addCount(){
    let count = 4; 
    count++; 
    
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const {name, color, origin, price, stock} = event.target;
    addFlower(name.value, color.value, origin.value, price.value, stock.value);
    form.reset();
    addCount();
});
