var maxRowCountNumber;

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
    if (currentRowCountNumber <= maxRowCountNumber) {
        document.getElementById("rowCount").innerHTML = currentRowCountNumber;
    }
    else if (currentRowCountNumber = maxRowCountNumber) {
        // currentRowCountNumber++;
        alert("You have reached your desired number of rows.")
    } 
    else {
        // currentRowCountNumber++;
        console.log("You are going over your desired number of rows.");
    };
    currentRowCountNumber++;
};

function changeMaxRowCount(event) {
    var a = event.target.value;
    a.id = "maxRowCountNumber";
    console.log(document.getElementById(maxRowCountNumber));

    if (isNaN(a) === false) {
        if (a > 0) {
            maxRowCountNumber = a;
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
    document.getElementById("decrease").addEventListener("click", decreaseCount, false);
    document.getElementById("increase").addEventListener("click", increaseCount, false);
    document.getElementById("maxRowCount").addEventListener("change", changeMaxRowCount, false);
};