function cargar() {
    const usuarios = [{"nombre": "Luis", "rol": "1", "color": "#ff0000"}];
    document.getElementById("boton").addEventListener("click", function () {
        agregar(usuarios);
    });
    imprimir(usuarios);
}

function agregar(usuarios){
    let nombre = document.getElementById("nombre").value;
    let rol = document.querySelector('input[name="rol"]:checked')?.value;
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
    let rol = "";
    usuarios.forEach(usuario => {
        switch (usuario.rol) {
            case "1":
                rol = "Admin";
                break;
            case "2":
                rol = "User";
                break;
            case "3":
                rol = "NonUser";
                break;
            default:
                rol = "User";
                break;
        }
        tabla.innerHTML += `<tr style="color: ${usuario.color}">
        <td>${usuario.nombre}</td>
        <td>${rol}</td>
        <td>${usuario.color}</td>
        </tr>`;
    });
}