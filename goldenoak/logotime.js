

var logo = document.getElementById("logotime")
var logo2 = document.getElementById("logotime2")

var html = document.getElementById("htmlname")


let alllogos = ["./torre.svg","./gasco.svg","./sqm.svg"]
let alllogos2 = ["./lostilos.svg","./lipi.svg","./burger.svg"]
let alltext = []


alltext[0] = '“Elegimos trabajar con GoldenOak por el profesionalismo mostrado al abordar nuestro requerimiento, su esfuerzo y empatía por “aterrizar” un tema árido y, principalmente, en advertir la objetividad e imparcialidad de velar por nuestros intereses como empresa en la solución desarrollada” <br><br> Jorge Vignolo – Productos Torre.'
alltext[1] = '"Nullam molestie velit lorem, sit amet fermentum metus euismod eu...." <br><br> Jeanne Done, Ceo.'
alltext[2] = '"Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus...." <br><br> Jeanne Done, Ceo.'
alltext[3] = '"Pellentesque ut sem eget nulla efficitur fermentum. Donec ligula ipsum, dignissim a diam eget, vestibulum pellentesque ipsum...." <br><br> Jeanne Done, Ceo.'
alltext[4]= '"Proin porta maximus dolor, at feugiat arcu. Quisque vitae varius eros. Nunc consectetur lorem eget quam blandit, ac faucibus urna auctor..." <br><br> Jeanne Done, Ceo.'
alltext[5]= '"Sed pellentesque purus ut ipsum dictum finibus. Donec mollis scelerisque sapien bibendum hendrerit. ..." <br><br> Jeanne Done, Ceo.'
let loli = 0
let loli2 = 0

function changelogo(){

    if(loli < 2){
        loli +=1
        
        console.log(loli)
    }
    else{
        loli = 0
        console.log(loli)
    }


    if(loli2 < alltext.length - 1){
        loli2 +=1
        
        console.log(loli)
    }
    else{
        loli2 = 0
    }

    
    
    
    setTimeout(function(){

        
        
        changelogo()
        logo.src = alllogos[loli]
        logo2.src = alllogos2[loli]
        html.innerHTML = alltext[loli2]

    }, 4600);


}

changelogo()