function generateBill(){
    let billno = document.getElementById("billno");
    let billdate = document.getElementById("billdate");
    let customer = document.getElementById('customer').value;
    let srno = document.getElementById("srno").value;
    let product = document.getElementById("product").value;
    let qty = parseFloat(document.getElementById("qty").value);
    let rate = parseFloat(document.getElementById("rate").value);
    let amount = qty * rate;

    let total = amount;
    let taxrate = 18;
    let tax = total * taxrate / 100;
    let grandTotal = total + tax;

    document.getElementById("billnoview").innerText = billno.value;
    document.getElementById("billdateview").innerText = billdate.value;
    document.getElementById('customerview').textContent = customer;
    document.getElementById("srnoview").innerText = srno;
    document.getElementById("productview").innerText = product;
    document.getElementById("qtyview").innerText = qty;
    document.getElementById("rateview").innerText = rate;
    document.getElementById("amountview").innerText = amount;

    document.getElementById("totalview").innerText = total;
    document.getElementById("taxrateview").innerText = taxrate;
    document.getElementById("taxview").innerText = tax;
    document.getElementById("grandtotalview").innerText = grandTotal;
}