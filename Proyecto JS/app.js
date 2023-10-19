const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");
const operadores = ['+', '-', '*', '/'];

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent;

        if (boton.id === "c") {
            pantalla.textContent = "0"; 
            return;

        }

        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error"){
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1); 
            }
            return; 

        }
        if (boton.id === "igual") {
            try{
                pantalla.textContent = eval(pantalla.textContent); 
            } catch {
                pantalla.textContent = "Error"
            }
            return; 
        }
        
        if (pantalla.textContent === "0" || pantalla.textContent === "Error") {
            pantalla.textContent = botonApretado; 
         } else {
            const ultimoCaracter = pantalla.textContent.slice(-1);
            if(operadores.includes(ultimoCaracter) && operadores.includes(botonApretado)) {
                pantalla.textContent = "Error";
            } else {
                pantalla.textContent += botonApretado;
            }
         }
         
    })
})
