let count = 0;
let yesWidth = 150;
let yesHeight = 50;
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
let novekedesW = Math.pow(windowWidth / yesWidth, 1 / 9);
let novekedesH = Math.pow(windowHeight / yesHeight, 1 / 9);
let buttonYes=document.getElementById("Yes");
let buttonNo=document.getElementById("No");
function yes(){
    alert("YES");
}
function no(){
    count++;
    let newWidth = yesWidth * Math.pow(novekedesW, count);
    let newHeight = yesHeight * Math.pow(novekedesH, count);
    buttonYes.style.width = newWidth + "px";
    buttonYes.style.height = newHeight + "px";
    buttonYes.scrollIntoView({ behavior: "instant", block: "start" });
    if(count==1){
        buttonNo.innerHTML="Are you sure?";
    }
    else if (count==2){
        buttonNo.innerHTML="Really sure??";
    }
    else if (count==3){
        buttonNo.innerHTML="Are you positive?";
    }
    else if (count==4){
        buttonNo.innerHTML="Pookie please...";
    }
    else if (count==5){
        buttonNo.innerHTML="Just think about it!";
    }
    else if (count==6){
        buttonNo.innerHTML="If you say no, I will be really sad...";
    }
    else if (count==7){
        buttonNo.innerHTML="I will be very sad...";
    }
    else if (count==8){
        buttonNo.innerHTML="I will be very very very sad...";
    }
    else if (count==9){
        buttonNo
    }
    
}