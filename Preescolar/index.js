const $tiempo=document.querySelector(".tiempo");
const $fecha=document.querySelector(".fecha");

let horarioBachillerato= ['6:45:06 a.&nbsp;m.','7:40:00 a.&nbsp;m.','8:35:06 a.&nbsp;m.','9:05:06 a.&nbsp;m.','10:00:00 a.&nbsp;m.','10:55:06 a.&nbsp;m.','11:50:06 a.&nbsp;m.','12:50:06 p.&nbsp;m.','1:40:06 p.&nbsp;m.','2:30:00 p.&nbsp;m.','2:40:00 p.&nbsp;m.','2:52:00 p.&nbsp;m.',"14:59:00", "13:00:00",'2:59:00 p.&nbsp;m.' ]

function digitalClock() {
    let f= new Date(),
    dia = f.getDate(),
    mes=  f.getMonth(),
    anio= f.getFullYear(),
    diaSemana = f.getDay();
    let timeString = f.toLocaleTimeString({
        hour12: true,
        timeZone:'America/Bogota'});
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
  
  

