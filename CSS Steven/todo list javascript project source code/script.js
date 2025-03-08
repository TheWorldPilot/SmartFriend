let Listbtn= document.getElementsByTagName("LI");
var i;
for(i = 0; i<Listbtn.length; i++){
    let span = document.createElement("SPAN")
    let text = document.createTextNode("\u00D7")
    span.className = "close";
    span.appendChild(text)
    Listbtn[i].appendChild(span)
}
let close = document.getElementsByClassName("close");
var i;
for(i=0; i < close.length; i++){
    close[i].onclick = function(){
        let div = this.parentElement;
        div.style.display = "none";

    }
 }
 let btn = document.querySelector('ul');
 btn.addEventListener('click', function(ev){
    if(ev.target.tagName === 'LI'){
        ev.target.classList.toggle('checked');

    }
 },false);
 
function newItem(){
    let li = document.createElement("li")
    let inputValue = document.getElementById("input").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue ===''){
        alert("please write something!")

    }else{
        document.getElementById("items").appendChild(li)
    }
    document.getElementById("input").value = "";
    let span = document.createElement("SPAN")
    let text = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(text);
    li.appendChild(span);

    for(i = 0; i <close.length; i++){
        close[i].onclick = function(){
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
}

