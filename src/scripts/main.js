// relogio codigo nao é meu apesar de eu ter visto num site sobre, acabei encontrando um codigo livre online. creditos para um rapaz do reddit
function getDateTime() {
    var now     = new Date(); 
    var hour    = now.getHours();
    var minute  = now.getMinutes();
    var second  = now.getSeconds();  
    if(hour.toString().length == 1) {
        hour = '0'+hour;
    }
    if(minute.toString().length == 1) {
        minute = '0'+minute;
    }
    if(second.toString().length == 1) {
        second = '0'+second;
    }   
    
    var dateTime = hour+':'+minute+':'+second;   
    return dateTime;
}

function pegarData() {
    var now     = new Date(); 
    var year    = now.getFullYear();
    var month   = now.getMonth()+1; 
    var day     = now.getDate();
    if(month.toString().length == 1) {
        month = '0'+month; 
    }
    if(day.toString().length == 1) {
        day = '0'+day; // assim o dia nao fica puramente só o numero dele, é colocado um 0 + o numero se o dia tiver apenas 1 digito o mesmo serve para os demais.
    }  
    var dataAtual = day+' - '+month+' - '+year;
    return dataAtual;
}

setInterval(function(){
    currentTime = getDateTime();
    data = pegarData();
    document.getElementById("digital-clock").innerHTML = currentTime;
    document.getElementById("data").innerHTML = data;
}, 1000); // pra ele ficar ticando a cada 1 segundo ao invés de sair bugando o pc com refresh rate absurdamente rapido
//tick abaixo de 1 segundo exato da biziu no funcionamento.
//espero que tudo de certo