const form = document.querySelector("form");
const inventoryFlower = document.querySelector("ul");
const flowerList = document.querySelectorAll("li"); //this is an ARRAY!
const inStock = document.createElement("button");
let count = 4; 

function addFlower(name, color, origin, price, stock) {
    const li = document.createElement("li");
        li.classList.add("inventory-flower");
    if (name && color && origin && price) {
        li.innerHTML = 
            `<p><strong>Name:</strong> ${name} </p>
            <p><strong>Color:</strong> ${color} </p>
            <p><strong>Origin:</strong> ${origin}</p>
            <p><strong>Price:</strong> ${price}</p>`;
        li.append(inStock)
    if (stock === "true") {
        inStock.classList.add("in-stock")
        inStock.textContent = "In Stock"
    } else {
        inStock.classList.add("out-stock")
        inStock.textContent = "Out of Stock"
    }
    inStock.addEventListener("click", () => {
        if(inStock.classList.contains("in-stock")){
            inStock.textContent = "Out of Stock";
            inStock.classList.replace("in-stock", "out-stock");
        } else {
            inStock.textContent = "In Stock";
            inStock.classList.replace("out-stock", "in-stock");
        }
    })
    inventoryFlower.append(li);
    count++; 
    flowerCount(count);
    const remove = document.createElement("button");
    li.append(remove);
    remove.textContent = "Remove flower"
    remove.classList.add("remove")
    remove.addEventListener("click", () => {
        li.remove()
        count--; 
        flowerCount(count);
    })

}
}

flowerList.forEach(flower => {
    const removeButton = flower.querySelector(".remove");
    const stockButton = flower.querySelector(".stock");

    removeButton.addEventListener("click", () => {
        flower.remove();
        count--; 
        flowerCount(count);
    })
    stockButton.addEventListener("click", () => {
        if(stockButton.classList.contains("in-stock")){
            stockButton.textContent = "Out of Stock";
            stockButton.classList.replace("in-stock", "out-stock");
        } else {
            stockButton.textContent = "In Stock";
            stockButton.classList.replace("out-stock", "in-stock");
        }
    })
})

function flowerCount(count){ 
    const inventoryCount = document.querySelector(".count")
    inventoryCount.textContent = `Current Inventory (Inventory Quantity: ${count})`
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const {name, color, origin, price, stock} = event.target;
    addFlower(name.value, color.value, origin.value, price.value, stock.value);
    form.reset();
    addCount();
});
