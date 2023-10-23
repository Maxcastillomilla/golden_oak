let altura = document.body.clientHeight 

console.log(altura)


let inicio = 180
let primerscrollTop = document.documentElement.scrollTop;

/* if(primerscrollTop > 2500){
    primerscrollTop = 2500
} */
document.getElementById("megaline").style.height = primerscrollTop + inicio + "px"


var numtimer = (function() {
    var executed = false;
    return function() {
        if (!executed) {
            executed = true;
            setTimeout(function(){
                const counters = document.querySelectorAll('.counter')


counters.forEach( (counter) => {
    counter.innerText = '0'

    const updateCounter = () =>{
        const target = +counter.getAttribute('data-target')
        /* console.log(typeof target, target) */

        

        const c = +counter.innerText

        const increment = target / 300;

        if(c<target){
            counter.innerText = `${Math.ceil(c + increment )}`
            
            setTimeout(() => {
                updateCounter() 
                

            }, 1);
            
        }
        else{

            counter.innerText = +counter.getAttribute('data-target')
            if(counter.classList.contains('porcentaje')){
                counter.textContent += "%"
            }
        }
    }
    updateCounter()
})
            }, 1000);
        }
    };
})();





/* --------------- */

let img1 = document.querySelector('.i1');

let img2 = document.querySelector('.i2');

let img3 = document.querySelector('.i3');

let img4 = document.querySelector('.i4');

let img5 = document.querySelector('.i5');

let img6 = document.querySelector('.i6');

let img16 = document.querySelector('.i16');




var isMobile = {
    Android: function() {
        return navigator.userAgent.sssstch(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

/* if( isMobile.any()){

    
} */

document.getElementById("MAKING").classList.toggle('active');
function ScrollParallax(){
    
    let scrollTop = document.documentElement.scrollTop;
    console.log(scrollTop)

    if((inicio + scrollTop)> 220){
        document.getElementById("flecha").style.opacity = 0;
        numtimer()
        
    }


    
    if((inicio + scrollTop)> 220){
        document.getElementById("flecha").style.opacity = 0;
    }
    

    if(scrollTop < 3200){
        document.getElementById("megaline").style.height = inicio + scrollTop + "px"; 
        /* document.getElementById("megaline").style.transform = 'scale(1.5,1)'; // or any x and y value  */
        

    }

    else{
        document.getElementById("megaline").style.height = inicio + 3200 + "px"; 

    }

   
    /* ------------------------------- */



    if(img3.can == false  && scrollTop < 650){
        img3.classList.toggle('active');
        img3.can = true;
        
        /* console.log("true") */
    }




    if(scrollTop > 350){
        document.getElementById("t2").style.opacity = 1;


        if(img3.can != false  && scrollTop < 650){
            img3.classList.toggle('active');
            img3.can = false;
           /*  console.log("false") */
        }
        if(img3.can == false  && scrollTop > 1070){
            img3.classList.toggle('active');
            img3.can = true;
            /* console.log("true") */
        }
        else if(img3.can != false  && scrollTop < 1070){
            img3.classList.toggle('active');
            img3.can = false;
            /* console.log("false") */
        }




    }
    else{
        document.getElementById("t2").style.opacity = 0;
    }
    if(scrollTop > 750){
        
        document.getElementById("sub2").style.opacity = 1;
        
    }
    else{
        document.getElementById("sub2").style.opacity = 0;
    }

     /* ------------------------------- */
     if(img4.can == false  && scrollTop < 1100){
        img4.classList.toggle('active');
        img4.can = true;
        /* console.log("true") */
    }




     if(scrollTop > 1250){
        document.getElementById("t3").style.opacity = 1;



        if(img4.can != false  && scrollTop < 1250){
            img4.classList.toggle('active');
            img4.can = false;
            /* console.log("false") */
        }
        if(img4.can == false  && scrollTop > 1790){
            img4.classList.toggle('active');
            img4.can = true;
            /* console.log("true") */
        }
        else if(img4.can != false  && scrollTop < 1790){
            img4.classList.toggle('active');
            img4.can = false;
            /* console.log("false") */
        }




    }
    else{
        document.getElementById("t3").style.opacity = 0;
    }
    if(scrollTop > 1400){
        
        document.getElementById("sub3").style.opacity = 1;
        document.getElementById("botonresi").style.opacity = 1;
        
        
    }
    else{
        document.getElementById("sub3").style.opacity = 0;
        document.getElementById("botonresi").style.opacity = 0;
    }





     /* ------------------------------- */

     if(img5.can == false  && scrollTop < 1890){
        img5.classList.toggle('active');
        img5.can = true;
        /* console.log("true") */
    }




     if(scrollTop > 1590){
        document.getElementById("t4").style.opacity = 1;

        if(img5.can != false  && scrollTop < 1790){
            img5.classList.toggle('active');
            img5.can = false;
            /* console.log("false") */
        }
        if(img5.can == false  && scrollTop > 2270){
            img5.classList.toggle('active');
            img5.can = true;
            /* console.log("true") */
        }
        else if(img5.can != false  && scrollTop < 2270){
            img5.classList.toggle('active');
            img5.can = false;
            /* console.log("false") */
        }

        
    }
    else{
        document.getElementById("t4").style.opacity = 0;
    }
    if(scrollTop > 2080){
        
        document.getElementById("sub4").style.opacity = 1;
        
        
        
    }
    else{
        document.getElementById("sub4").style.opacity = 0;
    }


    
     /* ------------------------------- */






     if(img2.can == false  && scrollTop < 2530){
        img2.classList.toggle('active');
        img2.can = true;
        
    }

    if(scrollTop > 2430){
        document.getElementById("t1").style.opacity = 1;

        if(img2.can != false  && scrollTop < 2700){
            img2.classList.toggle('active');
            img2.can = false;
            
        }
        if(img2.can == false  && scrollTop > 3000){
            img2.classList.toggle('active');
            img2.can = true;
            
        }
        else if(img2.can != false  && scrollTop < 3000){
            img2.classList.toggle('active');
            img2.can = false;
           
        }


        
        
    }
    else{
        document.getElementById("t1").style.opacity = 0;

        
        
    }
    if(scrollTop > 2800){
        
        /* document.getElementById("sublg1").style.opacity = 1;
        document.getElementById("sublg2").style.opacity = 1;
        document.getElementById("sublg3").style.opacity = 1; */
        /* document.getElementById("sub1p2").style.opacity = 1; */
        console.log("nada")
        
    }
    else{
        /* document.getElementById("sublg1").style.opacity = 0;
        document.getElementById("sublg2").style.opacity = 0;
        document.getElementById("sublg3").style.opacity = 0; */
        /* document.getElementById("sub1p2").style.opacity = 0; */
        console.log("nada")
    }



/* -------------------------------- */









     if(img6.can == false  && scrollTop < 3100){
        img6.classList.toggle('active');
        img6.can = true;
        /* console.log("true") */
    }



    
     if(scrollTop > 3680){
        document.getElementById("t5").style.opacity = 1;
        /* console.log("????????") */
       


        if(img6.can != false  && scrollTop < 3100){
            img6.classList.toggle('active');
            img6.can = false;
            /* console.log("false") */
        }
        if(img6.can == false  && scrollTop > 4300){
            img6.classList.toggle('active');
            img6.can = true;
            /* console.log("true") */
        }
        else if(img6.can != false  && scrollTop < 4300){
            img6.classList.toggle('active');
            img6.can = false;
            /* console.log("false") */
        }






    }
    else{
        document.getElementById("t5").style.opacity = 0;
    }
    if(scrollTop > 3300){
        
        document.getElementById("sub5").style.opacity = 1;
        
        
        
    }
    else{
        document.getElementById("sub5").style.opacity = 0;
    }


   /*  --------------------------- */

   if(scrollTop > 3180){
    document.getElementById("t7").style.opacity = 1;
    document.getElementById("sub7").style.opacity = 1;
    document.getElementById("cont").style.opacity = 1;
    /* numtimer()
 */

    if(img16.can != false  && scrollTop < 2650){
        img16.classList.toggle('active');
        img16.can = false;
        
    }
    if(img16.can == false  && scrollTop > 3650){
        img16.classList.toggle('active');
        img16.can = true;
        
    }
    else if(img16.can != false  && scrollTop < 3650){
        img16.classList.toggle('active');
        img16.can = false;
        document.getElementById("megaline").style.height = inicio + scrollTop + "px";
       
    }


    
    
}
else{
    document.getElementById("t7").style.opacity = 0;
    document.getElementById("sub7").style.opacity = 0;
    document.getElementById("cont").style.opacity = 0;
    document.getElementById("megaline").style.height = inicio + scrollTop + "px";

    
    
}
if(scrollTop > 2800){
    
    /* document.getElementById("sublg1").style.opacity = 1;
        document.getElementById("sublg2").style.opacity = 1;
        document.getElementById("sublg3").style.opacity = 1; */
    /* document.getElementById("sub1p2").style.opacity = 1; */
    console.log("nada")
    document.getElementById("megaline").style.height = inicio + scrollTop + "px";
    
}





else{
    /* document.getElementById("sublg1").style.opacity = 0;
        document.getElementById("sublg2").style.opacity = 0;
        document.getElementById("sublg3").style.opacity = 0; */
    /* document.getElementById("sub1p2").style.opacity = 0; */
    console.log("nada")
    document.getElementById("megaline").style.height = inicio + scrollTop + "px";
}







}
    
















window.addEventListener('scroll', ScrollParallax);