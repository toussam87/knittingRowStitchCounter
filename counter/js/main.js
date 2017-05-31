var maxRowCountNumber;
var currentRowCountNumber = 0;

//function to decrease current Row Count
function decreaseCount() {
    if (currentRowCountNumber > 0) {
        currentRowCountNumber--;
    } else {
        alert("You currently have zero rows.")
    }
    updateRowCounterDisplay();
};

//function to increase current Row Count
function increaseCount() {
    currentRowCountNumber++;
    updateRowCounterDisplay();
    
    //checks to see if current Row Count is equal to the desired set number of max row count
    if (currentRowCountNumber === maxRowCountNumber) {
        alert("You have reached your desired number of rows.");
    } 
    //increments current row count past set max row count
    else if (currentRowCountNumber > maxRowCountNumber) {
        alert("You are going over your desired number of rows.");
    };
};

function updateRowCounterDisplay() {

    // maxRowCountNumber
    // currentRowCountNumber
    var rowCounterDisplay = document.getElementById("rowCount");

    if (maxRowCountNumber > 0) {
        rowCounterDisplay.innerHTML = currentRowCountNumber + " of " + maxRowCountNumber;
    } 
    else {
        rowCounterDisplay.innerHTML = currentRowCountNumber;
    };
};

// function sets max Row count
function changeMaxRowCount(event) {
    var a = event.target.value;

    // console.log(document.getElementById(maxRowCountNumber));

    if (isNaN(a) === false && a !== "") {
        if (a > 0) {
            maxRowCountNumber = parseInt(a);
            
        } 
        else {
            alert("You've entered a number less than or equal to zero.");
        }
    }
    else if (isNaN(a)) {
        alert("Please enter a number.");
    }
    else if (a === "") {
        maxRowCountNumber = undefined;
    }
    updateRowCounterDisplay();
};

function addSection(){
    console.log("test")
    var newSection = document.createElement("div");
    var grabMain = document.getElementById("main");
    grabMain.appendChild(newSection);
}

window.onload = function() {
    document.getElementById("decrease").addEventListener("click", decreaseCount, false);
    document.getElementById("increase").addEventListener("click", increaseCount, false);
    document.getElementById("maxRowCount").addEventListener("change", changeMaxRowCount, false);
    document.getElementById("addSection").addEventListener("click", addSection, false);
};