// Function to calculate total cost of petrol based on user input for cost per litre and number of litres
function calculate() {
    // Get the values from the input fields and convert them to floating-point numbers
    var costPerLit = parseFloat(document.getElementById("cost").value);
    var litres = parseFloat(document.getElementById("number").value);

    //To calculate the total cost by multiplying cost per litre with number of litres
    var total = costPerLit * litres;
    
    // Displaying of result in <p> element
    document.getElementById("total").textContent = "Total cost: $" + total;
}
