function calculate() {
    var costPerLit = parseFloat(document.getElementById("cost").value);
    var litres = parseFloat(document.getElementById("number").value);
    var total = costPerLit * litres;
    
    document.getElementById("total").textContent = "Total cost: $" + total.toFixed(2);
}