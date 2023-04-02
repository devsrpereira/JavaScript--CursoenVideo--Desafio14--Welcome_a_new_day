function carregar(){
    var agora = new Date()
    var tempo = agora.getHours()
    var msg = window.document.querySelector('div#imsg')
    var img = window.document.querySelector('img')

    if (tempo<12){
        msg.innerHTML = `Agora são ${tempo} horas, Bom Dia!`
        document.body.style.backgroundColor = '#D9A86C'
        img.src = 'imagens/manha.jpg' 

    
    } else if (tempo < 18){
        msg.innerHTML = `Agora são ${tempo} horas, Bom Tarde!`
        document.body.style.backgroundColor = '#FCA472'
        img.src = 'imagens/tarde.jpg'             
    
    } else{
        msg.innerHTML = `Agora são ${tempo} horas, Bom Noite!`
        document.body.style.backgroundColor = '#3D4F73'
        img.src = 'imagens/noite.jpg'            
    }
}    