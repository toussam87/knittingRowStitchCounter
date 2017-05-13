var maxRowCountNumber;

//function to decrease current Row Count
function decreaseCount() {
    var currentRowCountNumber = parseInt(document.getElementById("rowCount").innerHTML);
if (currentRowCountNumber > 0) {
    currentRowCountNumber--;
    document.getElementById("rowCount").innerHTML = currentRowCountNumber;
} else {
    alert("You currently have zero rows.")
    }
};

//function to increase current Row Count
function increaseCount() {
    var currentRowCountNumber = parseInt(document.getElementById("rowCount").innerHTML);
    currentRowCountNumber++;
    //checks to see if current Row Count is less than or equal to the desired set number of max row count
    if (currentRowCountNumber < maxRowCountNumber) {
        document.getElementById("rowCount").innerHTML = currentRowCountNumber;
        currentRowCountNumber++;
    }

    //checks to see if current Row Count is equal to the desired set number of max row count
    else if (currentRowCountNumber === maxRowCountNumber) {
        document.getElementById("rowCount").innerHTML = currentRowCountNumber;
        alert("You have reached your desired number of rows.");
        currentRowCountNumber++;
    } 
    //increments current row count past set max row count
    else {
        document.getElementById("rowCount").innerHTML = currentRowCountNumber;
        alert("You are going over your desired number of rows.");
        currentRowCountNumber++;
    };
};

// function sets max Row count
function changeMaxRowCount(event) {
    var a = event.target.value;
    a.id = "maxRowCountNumber";
    console.log(document.getElementById(maxRowCountNumber));

    if (isNaN(a) === false) {
        if (a > 0) {
            maxRowCountNumber = a;
        } 
        else {
                alert("You've entered a number less than or equal to zero.");
        }
    }
    else {
        alert("Please enter a number.");
    }
};

window.onload = function() {
    document.getElementById("decrease").addEventListener("click", decreaseCount, false);
    document.getElementById("increase").addEventListener("click", increaseCount, false);
    document.getElementById("maxRowCount").addEventListener("change", changeMaxRowCount, false);
};