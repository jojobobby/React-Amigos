var jet = document.getElementById("jet");
var board = document.getElementById("board");

window.addEventListener("keydown",(e)=>{
    var left = parseInt(window.getComputedStyle(jet).getPropertyValue("left"));
    if(e.key == "ArrowLeft" && left>0){
        jet.style.left = left - 10 + "px";
    }
    else if (e.key == "ArrowRight" && left <= 460){
        jet.style.left = left + 10 + "px";
    }
})

var generaterocks = setInterval(()=>{
    var rock = document.createElement("div")
    rock.classList.add("rocks")
    var rockleft = parseInt(window.getComputedStyle(rock).getPropertyValue("left"));
    rock.style.left = Math.floor(Math.random()*450) + "px";
    board.appendChild(rock);
},1500);

var moverocks = setInterval(()=>{
    var rocks = document.getElementsByClassName("rocks");

    if(rocks!= undefined){
        for(var i = 0; i < rocks.length; i++){
            var rock = rocks[i];
            var rocktop = parseInt(window.getComputedStyle(rock).getPropertyValue("top"));
            
            rock.style.top = rocktop + 20 + "px";
        }
    }
}, 450);