function atualizarRelogio(){
    var agora = new Date();
    var horas = agora.getHours();
    var minutos = agora.getMinutes();
    var segundos = agora.getSeconds();
    document.getElementById("ihoras").innerHTML = horas;
    document.getElementById("iminutos").innerHTML = minutos;
    document.getElementById("isegundos").innerHTML = segundos;
}
setInterval(atualizarRelogio, 1000);