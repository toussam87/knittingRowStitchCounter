var maxRowCountNumber;
var currentRowCountNumber = 0;

//function to decrease current Row Count
function decreaseCount() {
    for (var i = 0; i < decrease.length; ii++) {
        decrease[i].addEventListener("click", remove)
    }
        function remove() {
        if (currentRowCountNumber > 0) {
            currentRowCountNumber--;
        } else {
            alert("You currently have zero rows.")
        }
        updateRowCounterDisplay();
        }
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

    console.log(currentRowCountNumber);
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
}

function addSection(){
    var newSection = document.createElement("div");
    newSection.id = 'section';
    newSection.innerHTML = '<input class="sectionName" placeholder="Section Name"></input> <span class="count"> <button class="decrease" id="decrease"> - </button> <span id="rowCount">0 </span> <button class="increase" id="increase"> + </button> </span> <input id="maxRowCount" placeholder="Enter Max Row Count"></input> </div> </div>';
    document.getElementById("main").appendChild(newSection);
}

function appendClass() {
    document.querySelectorAll("body #main .section").forEach(function(n) {

        n.addEventListener("click", function(event) {
            var clickedThing = event.target;

            if (!clickedThing.classList.contains("selected")) {
                clickedThing.classList.add("selected");
            }
        });
    });
}

function removeSection() {
    document.querySelectorAll(".selected").forEach(function(thingToBeRemoved) {
        thingToBeRemoved.remove();
        });
    };

window.onload = function() { 
    document.getElementsByClassName("decrease").addEventListener("click", decreaseCount, false);
    document.getElementsByClassName("increase").addEventListener("click", increaseCount, false);
    document.getElementById("maxRowCount").addEventListener("change", changeMaxRowCount, false);
    document.getElementById("addSection").addEventListener("click", addSection, false);
    document.getElementById("removeSection").addEventListener("click", removeSection, false);
    document.getElementById("main").addEventListener("click", appendClass, false);
};