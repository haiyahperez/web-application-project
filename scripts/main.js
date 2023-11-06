const form = document.querySelector("form");

function addFlower(name, color, origin, price, stock) {
    const li = document.createElement("li");
        li.classList.add("add-flower");
    if (name && color && origin && price) {
        li.innerHTML = 
            `<p><strong>Name:</strong> ${name} </p>
            <p><strong>Color:</strong> ${color} </p>
            <p><strong>Origin:</strong> ${origin}</p>
            <p><strong>Price:</strong> ${price}</p>`;
    const button = document.createElement("button");
        li.append(button)
    if (stock === true) {
        button.classList.add("in-stock")
        button.textContent = "In Stock"
    } else {
        button.classList.add("out-stock")
        button.textContent = "Out of Stock"
    }
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






// Objectives: 
// Let data persist. 
// Create a flower: 
    // Name, Color, Origin, Price, In Stock or Out of Stock
    // Add upload file data= HTTPS://
// Add count to inventory. 
// Working reset button.