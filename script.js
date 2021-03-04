let i = 0;

function changePicture(){
    let array = ["images/110571325734.jpg", "images/250X110668568400.jpg", "images/banner_atar.jpg" , "images/paz_250x110103131473.jpg"];
    document.getElementById("change-img").src = array[i];
    if(i == 3){
        i=0;
    }
    i++;
}


setInterval(changePicture, 1000);