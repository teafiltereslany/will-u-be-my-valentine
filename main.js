let count=0;
let yesWidth = 150
let yesHeight = 50
let buttonYes=document.getElementById("Yes");
let buttonNo=document.getElementById("No");

function yes(){
    alert("YES");
}
function no(){
    buttonYes.style.width=yesWidth*1.5+"px";
    yesWidth*=1.5;
    buttonYes.style.height=yesHeight*1.8+"px";
    yesHeight*=1.8;
    if(count==0){
        buttonNo.innerHTML="Are you sure?";
    }
}