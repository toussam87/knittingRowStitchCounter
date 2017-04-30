function decreaseCount() {
<<<<<<< HEAD
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
=======
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

window.onload = function() {
    decreaseFunction();
    increaseFunction();
};

function decreaseFunction() {
var decreaseRow = document.getElementById("decrease");
decreaseRow.addEventListener("click", decreaseCount, false);
};

function increaseFunction() {
var increaseRow = document.getElementById("increase");
increaseRow.addEventListener("click", increaseCount, false);
};
>>>>>>> ugh
