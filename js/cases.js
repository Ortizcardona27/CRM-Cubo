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
        console.log('File saved correctly.');
    });
}
*/

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
    debugger;
    var allText = rawFile.responseText;
    table = document.getElementById("tableCases");
    var allLine = allText.split("\n");
    //console.log(allLine);

    for (let i = 0; i < allLine.length; i++) {

        var lineCase = allLine[i].split("|");
        let tr = table.insertRow();
        let td = tr.insertCell();
        for (let j = 0; j < lineCase.length; j++) {
            //const cellIndex = j; // Calcula el índice de la celda correspondiente
            //const cell = cells[j];
            //cell.textContent = lineCase[j].trim();
            console.log(lineCase.length);
            td = tr.insertCell();
            td.innerHTML = lineCase[j].trim();
        }

        if (i != 0) {
            td = tr.insertCell();
            td.innerHTML = `<input id="editCase" type="button" value="Edit" onclick= "Editar(${lineCase})">`;
        }
        console.log(lineCase);
    }
}
rawFile.send(null);


// const botones = document.getElementById("#editCase");
// // Definir función y evitar definirla de manera anónima
// const cuandoSeHaceClick = function (evento) {
// 	// Recuerda, this es el elemento
// 	console.log("El texto que tiene es: ", this.innerText);

// 	// Podemos cambiar cualquier cosa, p.ej. el estilo
// 	this.style.borderColor = "blue";
// }
// // botones es un arreglo así que lo recorremos
// // botones.forEach(boton => {
// // 	//Agregar listener
// // 	boton.addEventListener("click", cuandoSeHaceClick);
// // });


// function Editar(row) {
//     console.log(row);
//     location.href = 'editCase.html';
//     // const cases = subject.value + '|' + caseType.value + '|' + name.value + '|' + phone.value
//     //     + '|' + email.value + '|' + acceptTerms.value;

//     // const filePath = '.BD/casos.txt';

//     // fs.writeFile(filePath, cases, function (err) {
//     //     if (err) {
//     //         console.error(err);
//     //     }
        
//     //     alert("the case was successfully registered")
//     //     window.location = "home.html";
//     //     console.log('File saved correctly.');
//     // });
// }

