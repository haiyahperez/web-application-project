const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    console.log(event.target.name);
})

// function createFlower(name, color, origin, price) {
//     const li = document.createElement("li");
//     li.classList.add("add-flower");
// }
// if (name && color && origin && price) {
//     li.innerHTML =  `<p><strong>Name</strong>: Rose </p>
//     <p><strong>Color:</strong> Red </p>
//     <p><strong>Origin:</strong> China </p>
//     <p><strong>Price:</strong> $ 25.00</p>`
//     <p><strong>In Stock:</strong> Yes</p>
// }


// const form = document.querySelector("form")
// const radioButton = document.querySelectorAll('input[type=["radio"]')

// form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     const {name, color, origin, price, radioButton } = event.target;
//     addFlower(name.value, color.value, origin.value, price.value);
// count++;
// addCount(count);
// form.reset();
// });

// radioButton.forEach(radio => {
//     radio.addEventListener('change', () => {
//         if (radio.checked){
            
//         }
//     }

//     )
// })
// Objectives: 
// Let data persist. 
// Create a flower: 
    // Name, Color, Origin, Price, In Stock or Out of Stock
    // Add upload file data= HTTPS://
// Add count to inventory. 
// Working reset button.