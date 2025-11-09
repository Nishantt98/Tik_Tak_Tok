let boxes = document.querySelectorAll(".box")
let resetbtn = document.querySelector(".reset-game");
let newbtn = document.querySelector("#new-btn");
let messC = document.querySelector(".mess-container");
let msg= document.querySelector("#msg");

let turnO = true //playerX playerO

const winpatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const resetGame = () =>{
    turnO = true;
    enableboxes();
    messC.classList.add("hide")
}




boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked")
        if (turnO) {
        
            box.innerText = "O"
            turnO = false;
        }
        else {
            box.innerText = "X";
            turnO = true;
        }
        box.Disabled = true

        checkWinner();

    })

})
const disabledboxes = ()=>{
    for(box of boxes){
        box.disabled = true
    }
}
const enableboxes = ()=>{
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner =(winner)=>{
    msg.innerText = `Congrulations,YOU HAVE WIN ${winner}`
    messC.classList.remove("hide")
    disabledboxes()
}
const checkWinner = () => {
    for (let pattern of winpatterns) {
   //console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText)
    let value1 = boxes[pattern[0]].innerText;
    let value2 = boxes[pattern[1]].innerText;
    let value3 = boxes[pattern[2]].innerText;

    if(value1 !="" && value2 !="" && value3 !=""){
        if(value1 === value2 && value2 ===value3){
            console.log("winner",value1)
            
            showWinner(value1)
        }
       
    }
}
}
  

newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
