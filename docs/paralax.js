console.log("start paralax");
let scroller = function(){

    let totalOffsetY = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollLeftInPercentage = (totalOffsetY - window.pageYOffset)/100;

    let imageRotation = function(){
        let elem = document.querySelector("#header_video");
        let rotationAngleClockwise = window.pageYOffset/20;
        let rotationAngleCounterClockwise =  (totalOffsetY - window.pageYOffset)/20;
        
        console.log("pageYOffset "+window.pageYOffset);
        console.log("rotationAngleClockwise "+rotationAngleClockwise);
        console.log("rotationAngleCounterClockwise "+rotationAngleCounterClockwise);
        console.log("scrollLeftInPercentage "+scrollLeftInPercentage);
        if(rotationAngleClockwise<60){
            elem.style = `transform: rotateX(${rotationAngleClockwise}deg);`
        }else if(scrollLeftInPercentage<15){
            elem.style = `transform: rotateX(${180+rotationAngleCounterClockwise}deg);`
            
            
        }else{
            elem.style = `transform: rotateX(230deg);`
        }
    }
    let titleAnimation = function(){
        let elem = document.querySelector("#title");
        
        if (window.pageYOffset<800){
            elem.style.left=`${window.pageYOffset}px`;
            elem.style.opacity = `${1 -window.pageYOffset/500 }`;
            elem.style.display = "block;";
        }else{
            elem.style.display = "none;";
        }

    }
    let footerAnimation = function(){
        let elem = document.querySelector("footer");
        let opacityStep =  (totalOffsetY - window.pageYOffset)/1000;
        if(scrollLeftInPercentage<9){
            elem.style =`opacity: ${0.8-opacityStep}`;
            
            elem.style.fontSize =`${1+(1*opacityStep)}rem`;
        }
    }

    imageRotation();
    titleAnimation();
    footerAnimation();
}

function copyToClipBoard(text) {
    var input = document.createElement('input');
    input.setAttribute('value', text);
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
}


window.onscroll = scroller;


// total offset = (document.documentElement.scrollHeight - document.documentElement.clientHeight)