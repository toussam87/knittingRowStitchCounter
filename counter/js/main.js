function decreaseCount() {
    var currentRowCount = document.getElementById("rowCount").innerHTML;
    if (currentRowCount > 0) {
        var decrease = currentRowCount--;
        console.log(decrease)
        rowCount.innerHTML = decrease;

    } else if (currentRowCount = 0) {
        alert("test");
    }
}

window.onload = function decreaseFunction() {

    var rowCount = document.getElementById("decrease");
    rowCount.addEventListener("click", decreaseCount, false);
}