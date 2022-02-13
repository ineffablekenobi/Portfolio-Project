function imageScaler(){

    var heroImg = document.getElementById("#hero-img");

    if(window.innerWidth > 600){
        var considerWidth = Math.min(window.innerWidth, 720);
        var shifter = (considerWidth - 600) * .07;
        heroImg.style.left = shifter +'px';
        console.log(shifter);
        var scaler = 1 + (considerWidth - 600) * 0.002;
        heroImg.style.transform = "scale("+scaler+")";
    }

}

window.addEventListener('load',imageScaler);
window.addEventListener('resize', imageScaler);