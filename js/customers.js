/*const fs = require('fs');

function RegisterCase(subject, caseType, name, phone, email) {

    const cases = subject.value + '|' + caseType.value + '|' + name.value + '|' + phone.value
        + '|' + email.value + '|' + acceptTerms.value;

    const filePath = '.BD/casos.txt';

    fs.writeFile(filePath, cases, function (err) {
        if (err) {
            console.error(err);
        }
        
        alert("the case was successfully registered")
        window.location = "home.html";
        console.log('Archivo guardado correctamente.');
    });
}
*/

const gridContainer = document.getElementById("grid-container-customers");

// Crea 9 elementos div para cada celda del grid
for (let i = 0; i < 7; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell"); // Agrega una clase para estilos adicionales
    gridContainer.appendChild(cell);
}

const cells = document.querySelectorAll(".cell"); // Obtiene todos los elementos div con clase "cell"

const file = "./BD/clientes.txt"
const rawFile = new XMLHttpRequest();
rawFile.open("GET", file, false);
rawFile.onload = function () {
    var allText = rawFile.responseText;
    var allLine = allText.split("\n");
    //console.log(allLine);

    for (let i = 0; i < allLine.length; i++) {

        var lineCase = allLine[i].split("|");

        for (let j = 0; j < lineCase.length; j++) {
            //const cellIndex = j; // Calcula el índice de la celda correspondiente
            const cell = cells[j];
            cell.textContent = lineCase[j].trim();
            console.log(lineCase[j]);
        }
        console.log(lineCase);
    }
}
rawFile.send(null);

    //const randomNumber = Math.floor(Math.random() * 9) + 1; // Genera un número aleatorio entre 1 y 9
    //cell.textContent = randomNumber; // Asigna el número como contenido del div