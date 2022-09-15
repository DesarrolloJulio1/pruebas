const formulario = document.querySelector("#formulario");

//crear el evento
formulario.addEventListener( "submit", validarFormulario )


//mis funciones
function validarFormulario(e){
    e.preventDefault();
    const nombre = document.querySelector("#nombre").value
    const select = document.querySelector("#select").value

    const nom = document.getElementById("nombre");
    nom.textContent = ${nombre}

    const sex = document.getElementById("select");
    sex.textContent = ${select}
}
