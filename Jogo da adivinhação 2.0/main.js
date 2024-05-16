let phrases= ['A vingança nunca é plena, mata a alma e envenena',
    'é justo que muito custe o que muito vale',
    'Com esforço e dedicação, tudo é possível',
    'Nada como um dia após o outro'
]

const screen1= document.querySelector('.screen1')
const screen2= document.querySelector('.screen2')
let messege= document.querySelector('.screen2 p')


function phrasegenerator(){

  screen1.classList.add('hide')
  screen2.classList.remove('hide')
 
 
    let phrase=phrases[Math.floor(Math.random()* phrases.length)] 
    console.log(phrase)

    document.querySelector('.screen2 p').innerText=phrase
    


}

