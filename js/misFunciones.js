function traerInformacion(){
    $.ajax({
        url : 'https://g472378678b3a99-retociclo3.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/gastos/gastos',
        type : 'GET',
        dataType : 'JSON',
        success : function(respuesta) {
            $("#resultado").empty();
            console.log(respuesta);
            mostrarRespuesta(respuesta.items);
        }
    });
}

function mostrarRespuesta(items){
    let myTable="<table>";
    for (i=0; i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].nombre+"</td>";
        myTable+="<td>"+items[i].fecha+"</td>";
        myTable+="<td>"+items[i].valor+"</td>";
        myTable+="<td>"+items[i].descripcion+"</td>";
        myTable+="<td>"+items[i].nombre_usuario+"</td>";
        myTable+="<td> <button onclick='borrarInformacion("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>"
    }
    myTable+="</table>";
    $("#resultado").append(myTable);
}

function limpiarFormulario(){
    $("#id").val("");
    $("#nombre").val("");
    $("#fecha").val("");
    $("#valor").val("");
    $("#descripcion").val("");
    $("#nombre_usuario").val("");
}

function guardarInformacion(){
    let myData={
        nombre:$("#nombre").val(),
        valor:$("#valor").val(),
        fecha:$("#fecha").val(),
        descripcion:$("#descripcion").val(),
        nombre_usuario:$("#nombre_usuario").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({    
        url : 'https://g472378678b3a99-retociclo3.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/gastos/gastos',
        dataType : 'JSON',
        data : myData,
        type : 'POST',
        dataType: 'json',
        success : function(respuesta) {
            console.log(json);
        },
        complete : function(respuesta) {
            limpiarFormulario();
            traerInformacion();
        }
    });
}

function editarInformacion(){
    let myData={
        id:$("#id").val(),
        nombre:$("#nombre").val(),
        valor:$("#valor").val(),
        fecha:$("#fecha").val(),
        descripcion:$("#descripcion").val(),
        nombre_usuario:$("#nombre_usuario").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({    
        url : 'https://g472378678b3a99-retociclo3.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/gastos/gastos',
        dataType : 'JSON',
        data : dataToSend,
        type : 'PUT',
        dataType: 'json',
        contentType:"application/JSON",
        success : function(respuesta) {
            console.log(json);
        },
        complete : function(respuesta) {
            limpiarFormulario();
            traerInformacion();
        },
    });
}

function borrarInformacion(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({    
        url : 'https://g472378678b3a99-retociclo3.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/gastos/gastos',
        dataType : 'JSON',
        data : dataToSend,
        type : 'DELETE',
        dataType: 'json',
        contentType:"application/JSON",
        success : function(respuesta) {
            console.log(json);
        },
        complete : function(respuesta) {
            limpiarFormulario();
            traerInformacion();
        },
    });
}