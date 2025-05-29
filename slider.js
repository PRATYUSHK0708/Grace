
// slider 
const slider=document.querySelectorAll(".slide")

var counter=0;
slider.forEach(
    (slide,index)=>{
        slide.style.left=`${index * 100}%`
    }
)

const gonext=()=>{
    if(counter<slider.length-1){
        counter++;
        
        slideimage()
    }

}
const goprev=()=>{
    if(counter!=0){
        counter--;
        
        slideimage()
    }
    

}



    const slideimage=()=>{
        slider.forEach(
            (slide)=>{
                slide.style.transform=`translateX(-${counter * 100}%)`
            }
            
        )
    }
    
// Home translation js

 let a=document.getElementById("smal");
setTimeout(function(){
   
    a.style.transform= `translateX(560px)`
   

},350)

let b=document.getElementById("pose");
setTimeout(function(){
    b.style.transform=`translateX(-560px)`
},350)

let c=document.getElementById("big");
setTimeout(function(){
    c.style.transform=`translatey(300px)`
},350)


// about  translation js

let d=document.getElementById("posee");
setTimeout(function(){
    d.style.transform=`translatey(-690px)`
},400)

let e=document.getElementById("para");
setTimeout(function(){
    e.style.transform=`translatey(690px)`
},400)





// pop js

window.onload = function() {
    // Show the modal after 30 seconds
    setTimeout(function() {
        document.getElementById('registrationModal').style.display = 'block';
    }, 5000); // 30000 milliseconds = 30 seconds
};

function closeModal() {
    document.getElementById('registrationModal').style.display = 'none';
}


// form js
document.querySelectorAll('.toggle').forEach(toggle => {
    toggle.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.container22').classList.toggle('show-signup');
    });
});

// let aa=window.onreload=function(){
//     window.location.href="/"
//   }
//   aa()