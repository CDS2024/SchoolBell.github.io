const $tiempo=document.querySelector(".tiempo");
const $fecha=document.querySelector(".fecha");
const horarioTipo=document.querySelector('.tipo-horario');
const reloj=document.querySelector('.reloj');
const bachillerato=document.querySelector("#Bachillerato");
const primaria=document.querySelector("#Primaria");
const timbrebachillerato=document.querySelector("#timbreBachillerato");
const timbreprimaria=document.querySelector("#timbrePrimaria");

bachillerato.addEventListener("click", ()=> {
    onDisplay(); 
    let horarioBachillerato= ['6:45:06 AM','7:40:00 AM','8:30:06 AM','9:15:06 AM','9:45:00 AM','10:35:06 AM','11:25:00 AM','12:15:00 PM','1:00:00 PM','1:40:06 PM','2:30:00 PM']
    function digitalClock() {
        let f= new Date(),
        dia = f.getDate(),
        mes=  f.getMonth(),
        anio= f.getFullYear(),
        diaSemana = f.getDay();
        let timeString = f.toLocaleTimeString('en-US', {hour12: true,timeZone: 'America/Bogota'});
        $tiempo.innerHTML = timeString;
        $fecha.innerHTML = `${anio}-${mes+1}-${dia}`
        console.log($tiempo.innerHTML);
        if(diaSemana > 0 & diaSemana < 6){
            for (const i of horarioBachillerato) {
                if($tiempo.innerHTML === i){
                    console.log("se logro",i);
                    timbrebachillerato.play();
                }
            }
        }
    }
    setInterval(()=>{
        digitalClock()
    },1000)
    });

function onDisplay() {
    console.log("buenas");
    horarioTipo.style.display=(horarioTipo.style.display=="none")? "flex":"none";
    reloj.style.display=(horarioTipo.style.display=="none")? "block":"none";
}

primaria.addEventListener("click", ()=> {
    onDisplay(); 
    let horarioPrimaria= ['6:45:06 AM','7:40:00 AM','8:35:00 AM','9:05:06 AM','10:00:00 AM','10:55:06 AM','11:50:06 AM','12:50:06 PM','1:40:06 PM','2:30:00 PM']; 
    function digitalClock() {
        let f= new Date(),
        dia = f.getDate(),
        mes=  f.getMonth(),
        anio= f.getFullYear(),
        diaSemana = f.getDay();
        let timeString = f.toLocaleTimeString('en-US', {hour12: true,timeZone: 'America/Bogota'});
        $tiempo.innerHTML = timeString;
        $fecha.innerHTML = `${anio}-${mes+1}-${dia}`
        console.log($tiempo.innerHTML);
        if(diaSemana > 0 & diaSemana < 6){
            for (const i of horarioPrimaria) {
                if($tiempo.innerHTML === i){
                    console.log("se logro",i);
                    timbreprimaria.play();
                }
            }
        }
    }
    setInterval(()=>{
        digitalClock()
    },1000)
    });

function onDisplay() {
    console.log("buenas");
    horarioTipo.style.display=(horarioTipo.style.display=="none")? "flex":"none";
    reloj.style.display=(horarioTipo.style.display=="none")? "block":"none";
}






