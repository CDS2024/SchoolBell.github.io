const $tiempo=document.querySelector(".tiempo");
const $fecha=document.querySelector(".fecha");

function digitalClock() {
    let f= new Date(),
    dia = f.getDate(),
    mes=  f.getMonth(),
    anio= f.getFullYear(),
    diaSemana = f.getDay();

    const opcionesDeFormato = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false };

    let timeString2 = f.toLocaleTimeString('es-ES', opcionesDeFormato);
    let timeString = f.toLocaleTimeString();
    let y ='1:31:10 p.&nbsp;m.';
    $tiempo.innerHTML = timeString;

    $fecha.innerHTML = `${anio}-${mes+1}-${dia}`
    console.log($tiempo.innerHTML === y, $tiempo.innerHTML);
    if($tiempo.innerHTML === y){
        console.log("se logro");
        timbreEscolar();
    }

}
setInterval(()=>{
    digitalClock()
},1000)


function timbreEscolar() {
    // Obtener el elemento de audio
    const elementoAudio = document.getElementById('sonidoTimbre');
  
    // Reproducir el sonido
    elementoAudio.play();
  
    // Puedes agregar otras acciones aquí si es necesario
    console.log("¡Ring! ¡Ring! ¡Ring! Es hora de cambiar de clase.");
}
  