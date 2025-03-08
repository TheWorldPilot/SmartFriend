
let x;
function passWord(){
    if(x==1){
        document.getElementById('password').type = 'password';
        document.getElementById('pass-icon').src = 'hide.png';
        x = 0;
    }
    else{
        document.getElementById('password').type = 'text';
        document.getElementById('pass-icon').src = 'show.png';
        x =1;
    }
}