/*const fs = require('fs');

//const gridContainer = document.getElementById("grid-container");

// Crea 7 elementos div para cada celda del grid
/*for (let i = 0; i < 7; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell"); // Agrega una clase para estilos adicionales
    gridContainer.appendChild(cell);
}*/

//const cells = document.querySelectorAll(".cell"); // Obtiene todos los elementos div con clase "cell"
const file = "./BD/casos.txt"
const rawFile = new XMLHttpRequest();
rawFile.open("GET", file, false);
rawFile.onload = function () {
    
    var allText = rawFile.responseText;
    var table = document.getElementById("tableCases");
    var allLine = allText.split("\n");

    for (let i = 0; i < allLine.length; i++) {

        var lineCase = allLine[i].split("|");
        let tr = table.insertRow();
        let td = tr.insertCell();
        for (let j = 0; j < lineCase.length; j++) {
            td = tr.insertCell();
            td.innerHTML = lineCase[j].trim();
        }

        if (i != 0) {
            td = tr.insertCell();
            td.innerHTML = `<input id="editCase" type="button" value="Edit" onclick= "Editar('${lineCase}')">`;
        }
    }
}
rawFile.send(null);


function Editar(row) {

    var rowByArray = row.split(",");
    var params = new URLSearchParams();
    
    params.append("CaseNumber", rowByArray[0]);
    params.append("Affair", rowByArray[1]);
    params.append("Customer", rowByArray[2]);
    params.append("State", rowByArray[3]);
    params.append("Attendant", rowByArray[6]);
    
    var url = "editCase.html?";
    url += params.toString();
    window.location.href = url;
}

