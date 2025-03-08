function updateTime() {     // create a function 
    var clock = new Date();       // create a new variable
    var clock_display = ("0" + clock.getHours()).slice(-2) + ":" + ("0" + clock.getMinutes()).slice(-2) + ":" + ("0" + clock.getSeconds()).slice(-2);
    document.getElementById('time').innerHTML = clock_display; // update element
}
setInterval(updateTime, 1000);

let usernameGlobal;
let passwordGlobalBK;
let passwordGlobalSR;

function usernameDisp() {
    document.getElementById('usernameDisplay').innerHTML = localStorage.getItem("usernameGlobal");
}

var x = 0;
function passwordShowHide(){
    if(x == 1){
        document.getElementById('password').type = 'password';
        document.getElementById('pass-icon').src = 'gambar/hide.png';
        x = 0;
    }
    else{
        document.getElementById('password').type = 'text';
        document.getElementById('pass-icon').src = 'gambar/show.png';
        x = 1;
    }
}

function login() {
    var username = document.getElementById("username").value;
    var password = stringToHash(document.getElementById('password').value);
    
    var passBK = localStorage.getItem("passwordGlobalBK");
    var passSR = localStorage.getItem("passwordGlobalSR");

    if (passBK == undefined) {
        var passBK = -371667947;
    }
    if (passSR == undefined) {
        var passSR = 839522638;
    }

    if (username == "benianaus" && password == passBK) {
        window.location.href = "homepage.html";
        localStorage.setItem("usernameGlobal","benianaus");
    }
    else if (username == "ujan_156" && password == passSR) {
        window.location.href = "homepage.html";
        localStorage.setItem("usernameGlobal","ujan_156");
    }
    else {
        alert("Username atau Password salah. Mohon coba lagi!")
    }
}


function forgetPass() {    
    var username
    var newPass;

    username = document.getElementById('username').value;

    if (username == "benianaus" || username == "ujan_156") {
        newPass = document.getElementById('password').value;
        if (newPass.length > 0) {
            newPass = stringToHash(newPass);
            if (username == "benianaus") {
                localStorage.setItem("passwordGlobalBK", newPass); }
            else if (username == "ujan_156") {
                localStorage.setItem("passwordGlobalSR", newPass); }
            window.location.href = "page-login.html";
        }
        else {
            alert("Password tidak boleh kosong")
        }
    }
    else {
        alert("Username salah. Silahkan ulangi lagi.")
    }
}

function stringToHash(string) {

    let hash = 0;

    if (string.length == 0) return hash;

    for (i = 0; i < string.length; i++) {
        char = string.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }

    return hash;
}

function generateHash() {
    alert(stringToHash('1sampe8'))
}

function penjumlahan() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const hasil = parseInt(num1) + parseInt(num2);
    document.getElementById('hasil').innerHTML = hasil;
}
object.addEventListener("click", penjumlahan);

function tambahIsiTabel() {
    event.preventDefault(); 
    const nama = document.getElementById('nama').value;
    const usia = document.getElementById('usia').value;
    const kota = document.getElementById('kota').value;
    const mataPelajaran = document.getElementById('mataPelajaran').value;
    const newRow = document.createElement('tr');

    if (nama.length==0) {
        alert("Hey, isi dulu tuh nama!!");
    }
    else {
    newRow.innerHTML = 
        `
        <td>${nama}</td>
        <td>${usia}</td>
        <td>${kota}</td>
        <td>${mataPelajaran}</td>
        `;
        
        document.querySelector('#tabelHasil tbody').appendChild(newRow);
        document.getElementById('dataForm').reset();
    };
}

var num1;
var prev;
var ops;
var opr;
var equal;
var result;
var temp;
var commaStat;
var commaDivider;

function num0() {
    num1 = 0;
    calculator();
}
function num1Calc() {
    num1 = 1;
    calculator();
}
function num2() {
    num1 = 2;
    calculator();
}
function num3() {
    num1 = 3;
    calculator();
}
function num4() {
    num1 = 4;
    calculator();
}
function num5() {
    num1 = 5;
    calculator();
}
function num6() {
    num1 = 6;
    calculator();
}
function num7() {
    num1 = 7;
    calculator();
}
function num8() {
    num1 = 8;
    calculator();
}
function num9() {
    num1 = 9;
    calculator();
}
function comma() {
    commaStat = 1;
    calculator();
}
function plus() {
    if (ops != undefined && ops != 0) {
        equal = 1;
        calculator();
    }

    ops = 1;
    opr = "+";
    commaStat = 0;
    commaDivider = 0;
    document.getElementById('calcTemp').innerHTML = result + "+";
    document.getElementById('calcResult').innerHTML = "" ;
    temp = result;
    prev = 0;
}
function minus() {
    if (ops != undefined && ops != 0) {
        equal = 1;
        calculator();
    }

    ops = 2;
    commaStat = 0;
    commaDivider = 0;
    opr = "-";
    document.getElementById('calcTemp').innerHTML = result + "-"  ;
    document.getElementById('calcResult').innerHTML = "" ;
    temp = result;
    prev = 0;
}
function multiply() {
    if (ops != undefined && ops != 0) {
        equal = 1;
        calculator();
    }
    
    ops = 3;
    commaStat = 0;
    commaDivider = 0;
    opr = "x";
    document.getElementById('calcTemp').innerHTML = result + "x"  ;
    document.getElementById('calcResult').innerHTML = "" ;
    temp = result;
    prev = 0;
}
function divide() {
    if (ops != undefined && ops != 0) {
        equal = 1;
        calculator();
    }

    ops = 4;
    commaStat = 0;
    commaDivider = 0;
    opr = "/";
    document.getElementById('calcTemp').innerHTML = result + ":"  ;
    document.getElementById('calcResult').innerHTML = "" ;
    temp = result;
    prev = 0;
}
function equalCalc() {
    equal = 1;
    calculator();
}
function clearCalc() {
    temp = 0;
    prev = 0;
    result = 0;
    commaStat = 0;
    commaDivider = 0;
    document.getElementById('calcTemp').innerHTML = "";
    document.getElementById('calcResult').innerHTML = "" ;
}
function calculator() {
    if (prev == undefined) {
        prev = 0;    }
    
    if (equal == 1 && ops == 1) {
        result = temp + prev;
        document.getElementById('calcTemp').innerHTML = "";
        equal = 0;
        ops = 0;  
        tambahHasilCalc(); 
        document.getElementById('calcResult').innerHTML = result;     }
    else if (equal == 1 && ops == 2) {
        result = temp - prev;  
        document.getElementById('calcTemp').innerHTML = "";
        equal = 0;
        ops = 0;
        tambahHasilCalc(); 
        document.getElementById('calcResult').innerHTML = result;     }
    else if (equal == 1 && ops == 3) {
        result = temp * prev;  
        document.getElementById('calcTemp').innerHTML = "";
        equal = 0;
        ops = 0;
        tambahHasilCalc(); 
        document.getElementById('calcResult').innerHTML = result;     }
    else if (equal == 1 && ops == 4) {
        result = temp / prev;  
        document.getElementById('calcTemp').innerHTML = "";
        equal = 0;
        ops = 0;
        tambahHasilCalc();
        document.getElementById('calcResult').innerHTML = result;      }
    else if (commaStat == 1) {
        document.getElementById('calcResult').innerHTML = result + ".";  
        commaStat = 2;   }
    else if (commaStat == 2) {
        if (commaDivider == 0 || commaDivider == undefined) {
            commaDivider = 1;    }
        num1 = num1 / (Math.pow(10,commaDivider));
        result = prev + num1;
        document.getElementById('calcResult').innerHTML = result;
        commaDivider = commaDivider + 1;    }
    else {
        result = prev*10 + num1;
        document.getElementById('calcResult').innerHTML = result;    }   
    prev = result; 
}

function tambahHasilCalc() {
    const newRow = document.createElement('tr');

    newRow.innerHTML = 
        `
        <td>${temp}${opr}${prev} = ${result}</td>
        `;
        
    document.querySelector('#tabelHasilKalkulator tbody').appendChild(newRow);
}

function showHide() {
    var pageTesting = document.getElementById('testing');
    var pageMtk = document.getElementById('matematika');
    var pageFis = document.getElementById('fisika');
    var pageKim = document.getElementById('kimia');
    var pageInf = document.getElementById('informatika');
    var pageEng = document.getElementById('inggris');
    var pageKuis = document.getElementById('kuis');

    document.getElementById('loading').style.display = "none";

    document.getElementById('displayInput').style.display = "block";
    document.getElementById('keterangan').style.display = "block";

    var inputValue = document.getElementById("searchInput").value;
    inputValueLowercase = inputValue.toLowerCase();

    if (inputValueLowercase == "mini") {
        pageTesting.style.display = "block"; 
        document.getElementById('keterangan').innerHTML = "";   }
    else if (inputValueLowercase == "matematika" || inputValueLowercase == "pak robert") {
        pageMtk.style.display = "block";
        document.getElementById('keterangan').innerHTML = "";      }
    else if (inputValueLowercase == "fisika") {
        pageFis.style.display = "block";
        document.getElementById('keterangan').innerHTML = "";      }
    else if (inputValueLowercase == "kimia") {
        pageKim.style.display = "block";
        document.getElementById('keterangan').innerHTML = "";      }
    else if (inputValueLowercase == "informatika") {
        pageInf.style.display = "block";
        document.getElementById('keterangan').innerHTML = "";      }
    else if (inputValueLowercase == "inggris" || inputValueLowercase == "english" ) {
        pageEng.style.display = "block";
        document.getElementById('keterangan').innerHTML = "";      }
    else if (inputValueLowercase == "porno" ) {
        document.getElementById('keterangan').innerHTML = "";
        window.location.href = "https://www.youtube.com/watch?v=9Deg7VrpHbM";      }
    else if (inputValueLowercase == "quiz" || inputValueLowercase == "kuis" ||inputValueLowercase == "ujian" || inputValueLowercase == "tes") {
        pageKuis.style.display = "block";
        document.getElementById('keterangan').innerHTML = "";      }
    else {
            pageTesting.style.display = "none";
            pageMtk.style.display = "none";  
            document.getElementById('keterangan').innerHTML = "Pencarian Tidak Ditemukan";  }
            
    document.getElementById('displayInput').innerHTML = "Menampilkan hasil untuk: " + inputValue;
}

function searchMateri() {
    var pageTesting = document.getElementById('testing');
    var pageMtk = document.getElementById('matematika');
    var pageFis = document.getElementById('fisika');
    var pageKim = document.getElementById('kimia');
    var pageInf = document.getElementById('informatika');
    var pageEng = document.getElementById('inggris');
    var pageKuis = document.getElementById('kuis');

    pageTesting.style.display = "none";
    pageMtk.style.display = "none"; 
    pageFis.style.display = "none";
    pageKim.style.display = "none";
    pageInf.style.display = "none";
    pageEng.style.display = "none";
    pageKuis.style.display = "none";
    
    document.getElementById('displayInput').style.display = "none";
    document.getElementById('keterangan').style.display = "none";

    document.getElementById('loading').style.display = "block";

    setTimeout(() => {
        showHide();
      }, 1000);
}

function kuis() {
    var score = 0;
    
    if (document.getElementById("q1c").checked) {
        score = score + 10;
    }
    if (document.getElementById("q2e").checked) {
        score = score + 10;
    }
    if (document.getElementById("q3b").checked) {
        score = score + 10;
    }
    if (document.getElementById("q4a").checked) {
        score = score + 10;
    }
    if (document.getElementById("q5c").checked) {
        score = score + 10;
    }
    if (document.getElementById("q6c").checked) {
        score = score + 10;
    }
    if (document.getElementById("q7e").checked) {
        score = score + 10;
    }
    if (document.getElementById("q8b").checked) {
        score = score + 10;
    }
    if (document.getElementById("q9d").checked) {
        score = score + 10;
    }
    if (document.getElementById("q10b").checked) {
        score = score + 10;
    }
    
    document.getElementById('hasilkuis').innerHTML = score + "%";
    
    if (score > 89) {
        document.getElementById('hasilkuis').style.color = "lime";    }
    else if (score > 69  && score <89) {
        document.getElementById('hasilkuis').style.color = "green";    }
    else if (score > 49 && score <69) {
        document.getElementById('hasilkuis').style.color = "yellow";    }
    else {
        document.getElementById('hasilkuis').style.color = "darkred";    }
}

function logOut() {
    window.location.href = "page-login.html";
}

function createMeteor() {
    let meteor = document.createElement('div');
    meteor.classList.add('meteor');
    document.body.appendChild(meteor);
    
    let startY = Math.random() * window.innerHeight;
    let duration = Math.random() * 3 + 2;
    meteor.style.top = startY + 'px';
    meteor.style.animationDuration = duration + 's';
    
    setTimeout(() => { meteor.remove(); }, duration * 1000);
}