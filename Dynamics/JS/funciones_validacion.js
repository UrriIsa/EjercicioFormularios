let input_nombre = document.getElementById("nombre");
let input_curp = document.getElementById("curp");
let input_mascotas = document.getElementById("mascotas");
let span_nombre = document.getElementById("span_nombre");

let main_form = document.getElementById("mainForm");
main_form.addEventListener("submit", function(event){
    event.preventDefault();
    alert("Uy kietos");


    if(input_nombre.value == "")
        console.log("Ta vacío mano");
    else
        console.log("No ta vacío");


    if(input_curp.value.length == 18)
        console.log("El CURP tiene la estructura correcta, tiene 18 caracteres.");
    else
        console.log(`No tiene la estructura correcta, tiene ${input_curp.value.length} caracteres.`);


    if(isNaN(input_mascotas.value))
        console.log("El dato no es numérico");
    else
        console.log("El dato es numérico.");

    let checkboxes = document.querySelectorAll("input[name='papas']:checked");
    console.log("Número de checkboxes: " + checkboxes.length);
    for (let i = 0; i < checkboxes.length; i++){
        console.log(checkboxes[i].value);
    }
    
})