var s="";
var p1=0;
var p2=0;
function getWords(){
    s="word word word word";
    p2=s.length-1;
    document.getElementById("words").innerHTML="<mark>w</mark>ord word word wor<mark>d</mark>";
}
getWords();

function updateMove(){
    document.getElementById("words").innerHTML=
        s.substring(0,p1)+"<mark>"+s.charAt(p1)
            +"</mark>"+s.substring(p1+1,p2)+"<mark>"
                +s.charAt(p2)+"</mark>"+s.substring(p2+1);
}
updateMove();