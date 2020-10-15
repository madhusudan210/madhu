for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click",msr);
}

function msr() {
    var btninnerHTML = this.innerHTML;
   keysound(btninnerHTML);
    animation(btninnerHTML);

    }
    document.addEventListener("keypress",function(event) {
      
        keysound(event.key);
        animation(event.key);
    });
        
    function keysound(key) {

         switch (key) {
        case 'w':
        var tom1= new Audio('tom-1.mp3');
        tom1.play(); 
        break;
        case 'a':
        var tom1= new Audio('tom-2.mp3');
        tom1.play(); 
        break;
        case 's':
        var tom1= new Audio('tom-3.mp3');
        tom1.play(); 
        break;
        case 'd':
        var tom1= new Audio('tom-4.mp3');
        tom1.play(); 
        break;
        case 'j':
        var tom1= new Audio('crash.mp3');
        tom1.play(); 
        break;
        case 'k':
        var tom1= new Audio('kick-bass.mp3');
        tom1.play(); 
        break;
        case 'l':
        var tom1= new Audio('snare.mp3');
        tom1.play(); 
        break;
    
        default:
        console.log(btninnerHTML);
            break;
    }

}
function animation(mii)
{var madhu = document.querySelector("." + mii);
madhu.classList.add("ravan");
setTimeout(function(){madhu.classList.remove("ravan");},100);

}