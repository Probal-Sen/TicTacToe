let boxes = document.querySelectorAll(".box")
let resetBtn = document.querySelector("#reset");
let newBtn= document.querySelector("#new");
let msgContainer= document.querySelector(".msg-container");
let msg= document.querySelector("#msg");
let turnO=true;
let winPatterns = [
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resestGame=()=>{
    turn0=true;
    enableBoxes();
    msgContainer.classList.add("hide");
};
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("Box Clicked!");
        if(turnO===true){
            box.innerText= "O";
            turnO=false;
        }
        else{
            box.innerText= "X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });
});
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled= false;
        box.innerText="";
    }
};
const showWinner =(winner)=>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
const checkWinner=()=>{
    for (let patterns of winPatterns){
        let pos1=boxes[patterns[0]].innerText;
        let pos2=boxes[patterns[1]].innerText;
        let pos3=boxes[patterns[2]].innerText;
        if( pos1!= "" && pos2!= "" && pos3!= "" ){
            if(pos1===pos2 && pos2===pos3){
                console.log("Winner",pos1);
                showWinner(pos1);
            }
        }
    }
};
newBtn.addEventListener("click",resestGame);
resetBtn.addEventListener("click",resestGame);