function ValidarID(ID) {
    if (ID.length>0) {
        if (parseInt(ID) > 0) {
            return true;
        } else {
            alert("El ID no puede ser negativo");
            return false;
        }
    } else {
        alert("El id debe ser mayor a 0");
        return false;
    }
}
function validarDisponibilidad(disponibilidad,cantidad){
    if(cantidad>0){
        return "Disponible";
    }

}

function validarCantidad(cantidad){
    if(cantidad>0){
        return cantidad;
    }
    else{
        return cantidad="No dispobible"
    }
}

function ValidarPrecio(precio) {
    if (precio>0) {
        return true;
    } else {
        return false;
    }
}

function ValidarTexto(texto) {
    let result = /^[a-zA-Z ]{2,45}$/.test(texto);
    if (!result) {
        alert("Nombre no válido");
    }
    return result;
}

var cont = 1;
$(function() {
    $("#nombre").blur(function(e) {
        var nombre = $("#nombre").val();
        ValidarTexto(nombre);
    });
    
    $("#precio").blur(function () { 
        var precio = parseFloat($("#precio").val());
        if (!ValidarPrecio(precio)) {
            alert("El precio debe ser mayor a 0");
        }
    });

    $("#cantidad").blur(function () { 
        var cantidad = $("#cantidad").val();
        validarCantidad(cantidad);
    });



    if (precio>0) {
        $('#ingresar').attr("disabled", true);
    }else{
        $('#ingresar').attr("disabled", false);
    }
    const form=document.getElementById("formulario");
    $("#ingresar").click(function(e) {
        form.addEventListener("submit", function(event){
            event.preventDefault();
        })
        
        var ID = $("#ID").val();
        var nombre = $("#nombre").val();
        var precio = parseFloat($("#precio").val());
        var cantidad= $("#cantidad").val();
        
        
        
    if (ValidarTexto(nombre) && ValidarPrecio(precio)) {
        
        var htmlTags='';
            htmlTags = '<tr>'
            htmlTags = htmlTags +
                '<td>' + cont + '</td>' +
                '<td>' + ID + '</td>' +
                '<td>' + nombre + '</td>' +
                '<td>' + precio + '</td>' +
                '<td>' + cantidad + '</td>' +
                '</tr>';
            $('#tabla tbody').append(htmlTags);
            $("#nombre").val('');
            cont++;
            form.reset();
        }
    })
});

function readTxt(usuario,contrasena){
    file="./usuarios.txt"
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                var usuarios = allText.split("/")
                console.log(usuarios)
                var es_usuario = false
                for (var i=0; i < usuarios.length; i++) {
                    var usuario_temporal = usuarios[i].split("-")
                    var nombre_usuario_temporal = usuario_temporal[0]
                    var contrasena_usuario_temporal = usuario_temporal[1]
                    console.log(nombre_usuario_temporal)
                    if (nombre_usuario_temporal==usuario.value && contrasena_usuario_temporal==contrasena.value){
                        es_usuario=true
                    }
                }
                if(es_usuario){
                    alert("Welcome to CUBO.")
                    window.location = "index.html";
                }else{
                    alert("You have entered the wrong username and/or password, try again.")
                }
                
            }
        }
    }
    rawFile.send(null);
}


function abrirRedSocial() {
    var redSocial = "https://www.instagram.com/cubo_2023/?igshid=ZDdkNTZiNTM%3D"
    alert("Welcome to our instagram, here you can contact us and we will give you a username and password.");
     window.location = redSocial;    
}x

$("#boton").click(function (e) { 
    var ms="";
    ms=generarRegsitro();
    $("mensaje").val(ms);
});


    
