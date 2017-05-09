function decreaseCount() {
    var currentRowCountNumber = parseInt(document.getElementById("rowCount").innerHTML);
if (currentRowCountNumber > 0) {
    currentRowCountNumber--;
    document.getElementById("rowCount").innerHTML = currentRowCountNumber;
} else {
    alert("You currently have zero rows.")
    }
};

function increaseCount() {
    var currentRowCountNumber = parseInt(document.getElementById("rowCount").innerHTML);
    currentRowCountNumber++;
    document.getElementById("rowCount").innerHTML = currentRowCountNumber;
};

function changeMaxRowCount(event) {
    var a = event.target.value;

    if (isNaN(a) === false) {
        if (a > 0) {
            alert("it is bigger than 0");
        } 
        else {
                alert("You've entered a number less than or equal to zero.");
        }
    }
    else {
        alert("Please enter a number.");
    }
    debugger;
};

window.onload = function() {
    decreaseFunction();
    increaseFunction();
    document.getElementById("maxRowCount").addEventListener("change", changeMaxRowCount, false);
};

function decreaseFunction() {
    var decreaseRow = document.getElementById("decrease");
    decreaseRow.addEventListener("click", decreaseCount, false);
};

function increaseFunction() {
    var increaseRow = document.getElementById("increase");
    increaseRow.addEventListener("click", increaseCount, false);
};