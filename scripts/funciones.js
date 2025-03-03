let usuarios = [];

function cargar() {
    const usuarios = [{ nombre: "Luis", rol: "Admin", color: "#ff0000" }];
    document.getElementById("boton").addEventListener("click", function () {
        agregar(usuarios);
    });
    imprimir(usuarios);
}

function agregar(usuarios){
    let nombre = document.getElementById("nombre").value;
    let rol = document.querySelector('input[name="rol"]:checked').value;
    let color = document.getElementById("color").value;
    if (validar(nombre, rol, color)) {
        usuarios.push({ nombre: nombre, rol: rol, color: color });
        imprimir(usuarios);
        document.getElementById("formulario").reset();
    }else{
        alert("Usuario no agregado");
    }
}

function validar(n,r,c){       
    if(!n || !r || !c){
        alert("Todos los campos son obligatorios");
        return false;
    }
    return true;
}

function imprimir(usuarios){
    let tabla = document.getElementById("tabla");
    tabla.innerHTML = "";
    usuarios.forEach(usuario => {
        tabla.innerHTML += `<tr style="color: ${usuario.color}">
        <td>${usuario.nombre}</td>
        <td>${usuario.rol}</td>
        <td>${usuario.color}</td>
        </tr>`;
    });
}