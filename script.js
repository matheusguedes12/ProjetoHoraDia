function carregar(){

var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var date = new Date()
var date = new Date()
var date = new Date()
var segundos = date.getSeconds()
var hora = date.getHours()
var Minutos = date.getMinutes()


msg.innerHTML = `Agora são ${hora}hrs${Minutos}min${segundos}s.`

var hora = 21

if(hora > 0 && hora < 12 ){
    //BOM DIA
    img.src = 'Imagens/fotomanha.png'
    document.body.style.background = '#eac3a5'
    
}
else if( hora >= 12 && hora < 18){
// BOA TARDE
img.src = 'Imagens/fototarde.png'
document.body.style.background = '#f96102'
}
else{
//BOA NOITE
img.src = 'Imagens/fotonoite.png'
document.body.style.background = '#b3a89d'
}
}
