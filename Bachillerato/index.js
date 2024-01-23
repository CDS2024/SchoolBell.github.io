const $tiempo=document.querySelector(".tiempo");
const $fecha=document.querySelector(".fecha");

let horarioBachillerato= ['6:45:06 AM','7:40:00 AM','8:30:06 AM','9:15:06 AM','9:45:00 AM','10:35:06 AM','12:15:00 PM','1:00:00 PM','1:40:06 PM','2:30:00 PM','3:10:00 PM']

function digitalClock() {
    let f= new Date(),
    dia = f.getDate(),
    mes=  f.getMonth(),
    anio= f.getFullYear(),
    diaSemana = f.getDay();
    let timeString = f.toLocaleTimeString('en-US', {hour12: true});
    $tiempo.innerHTML = timeString;
    $fecha.innerHTML = `${anio}-${mes+1}-${dia}`
    console.log($tiempo.innerHTML);
    if(diaSemana > 0 & diaSemana < 6){
        for (const i of horarioBachillerato) {
            if($tiempo.innerHTML === i){
                console.log("se logro",i);
                timbreEscolar();
            }
        }
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
  