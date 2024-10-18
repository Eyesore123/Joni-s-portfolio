// Create a "close" button and append it to each list item


var listVariable = document.getElementsByClassName("list-item");
var i; 
for (i = 0; i < listVariable.length; i++) {
    var span = document.createElement("span");
    var cross = document.createTextNode("\u274C");
    span.className = "close";
    span.appendChild(cross);
    listVariable[i].appendChild(span);
}

// Click on a close button to hide the current list item

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

// Add a "checked" symbol when clicking on a list item

var addCheck = document.getElementsByClassName("list-item");
var i;
for (i = 0; i < addCheck.length; i++) {
    addCheck[i].onclick = function() {
        this.classList.toggle("checked");
    }
}


// Create a new list item when clicking on the "Add" button

function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("someInput").value;
    var textNode = document.createTextNode(inputValue);
    li.appendChild(textNode);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("to-do-list").appendChild(li);
    }
    document.getElementById("someInput").value = "";

    var span = document.createElement("span");
    var cross = document.createTextNode("\u274C");
    span.className = "close";
    span.appendChild(cross);
    li.appendChild(span);

    // Add event listener to the new list item
    li.addEventListener("click", function() {
        this.classList.toggle("checked");
    });
}
