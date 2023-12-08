var textArea = document.getElementById('text-area');
function copiarContenido() {
    textArea.select();
    
    try {
        navigator.clipboard.writeText(textArea.value);
        mostrarNotificacion('Texto Copiado al Portapapeles');
    } catch (err) {
        console.error('Error al copiar al portapapeles', err);
    }
}

function pegarContenido() {
    textArea.focus();

    try {
        navigator.clipboard.readText().then(function (clipboardText) {
            textArea.value = clipboardText;
        });
    } catch (err) {
        console.error('Error al pegar del portapapeles', err);
    }
}

function dividir() {
    
    let numbers = textArea.value.split("\n");
    let reducedNumbers = [];
  
    for (let i = 0; i < numbers.length; i += 4) {
      let a = numbers[i];
      let b = i + 1 < numbers.length ? numbers[i + 1] : "";
      let c = i + 2 < numbers.length ? numbers[i + 2] : "";
      let d = i + 3 < numbers.length ? numbers[i + 3] : "";
  
      let numSpaces = b.length;
      reducedNumbers.push(`${a}${" ".repeat(numSpaces)}${c}\n${b} ${d}\n`);
    }
  
    textArea.value=reducedNumbers.join("");
    mostrarNotificacion('Contenido Formateado');
}

function mostrarNotificacion(mensaje) {
    Swal.fire({
        position: "bottom-center",
        icon: "success",
        title: mensaje,
        showConfirmButton: false,
        timer: 1500
    });
}