

function init(){
    var spaceShip = document.getElementsByClassName("player");
    spaceShip.style.position = "relative";
    objImage.style.left = "0px";
    objImage.style.top = "0px";
};

function getKeyAndMove(e){
    var key_code = e.which || e.keyCode;
    switch (key_code){
        case 37:
            moveLeft();
            break;
        case 38:
            moveUp();
            break;
        case 39:
            moveRight();
            break;
        case 40:
            moveDown();
            break;
        
    }
}

function moveLeft() {
    spaceShip.style.left = parseInt(spaceShip.style.left) - 5 + "px";
}

function moveUp() {
    spaceShip.style.top = parseInt(spaceShip.style.top) - 5 + "px";
}

function moveLeft() {
    spaceShip.style.left = parseInt(spaceShip.style.left) + 5 + "px";
}

function moveLeft() {
    spaceShip.style.top = parseInt(spaceShip.style.top) + 5 + "px";
}

window.onload = init;