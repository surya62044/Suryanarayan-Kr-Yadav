document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from actually submitting
    alert("Thank you for reaching out! We’ll get back to you soon.");
    document.getElementById('contactForm').reset(); // Reset form fields
});

// Set the learn more button through the toggle
function toggleContent() {
    const content = document.getElementById('additionalContent');
    content.style.display = content.style.display === 'none' || content.style.display === '' ? 'block' : 'none';
  }
  

// Set the current year dynamically  in footer
document.getElementById("currentYear").textContent = new Date().getFullYear();



// Set the book order scrolling
document.getElementById('BookOrderBtn').addEventListener('click', function() {
    // Scroll to the menu section when "Book Order" is clicked
    document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
});


// Set the book order in add to cart
    function orderDish(dishName) {
        // Simple action on click - Display an alert
        alert(dishName + " has been added to your cart!");
    }


    // Initialize an empty cart array to store the ordered dishes
let cart = [];

// Function to handle ordering a dish
function orderDish(dishName) {
    // Add the ordered dish to the cart
    cart.push(dishName);
    alert(dishName + " has been added to your cart!");
}
// Initialize an array to store the ordered dishes
let orderedDishes = [];

// Function to handle when a user orders a dish
function orderDish(dishName) {
    orderedDishes.push(dishName);
    updateCart();
}

// Function to update the cart display with the ordered dishes
function updateCart() {
    const cartBtn = document.querySelector(".btn-cart");
    const cartCount = orderedDishes.length;
    cartBtn.textContent = `Add to Cart (${cartCount})`;

    
    
    // Show the checkout section if there are ordered dishes
    if (cartCount > 0) {
        document.getElementById("checkout").style.display = "block";
        const orderSummary = document.getElementById("orderSummary");
        orderSummary.innerHTML = "<ul>";
        orderedDishes.forEach(dish => {
            orderSummary.innerHTML += `<li>${dish}</li>`;
        });
        orderSummary.innerHTML += "</ul>";
    } else {
        document.getElementById("checkout").style.display = "none";
    }
}

// Function to handle the confirmation of the order
document.getElementById("confirmOrderBtn").addEventListener("click", function () {
    // Simulate order confirmation
    document.getElementById("checkoutStatus").textContent = "Order booked successfully!";
    
    // Clear the cart after successful booking
    orderedDishes = [];
    setTimeout(() => {
        document.getElementById("checkoutStatus").textContent = "";
        updateCart();
    }, 3000);  // Hide confirmation message after 3 seconds
});



 // This is animated text h2 in home section every second

document.addEventListener("DOMContentLoaded", () => { const textArray = ["Welcome to Cafe Naveen...!!"];
    const animatedText = document.getElementById("animatedText");
     const colors = ["color2"]; 
    let charIndex = 0; let isDeleting = false; 
    function animateText()
     { 
       const currentText = textArray[0]; 
       animatedText.innerHTML = `<span class="${colors[charIndex % colors.length]}">
           ${currentText.slice(0, charIndex)}</span>`; 
       if (!isDeleting)
        { if (charIndex < currentText.length)
            { charIndex++; setTimeout(animateText, 150); 
           }
            else {
                isDeleting = true; setTimeout(animateText, 1000);
                } }
                 else {
                    if (charIndex > 0) 
                    { charIndex--; setTimeout(animateText, 100); 
                   }
                    else {
                        isDeleting = false; setTimeout(animateText, 500);
                        }
                        } }
                         animateText(); 
                       }); 
                   