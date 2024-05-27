
//selecting all the boxes
let boxes = document.querySelectorAll(".box")
let resetBtn = document.querySelector(".resetBtn")
let newGameBtn = document.querySelector(".newGame")
let msgContainerPara = document.querySelector(".winner")
let winnerClass = document.querySelector(".winnerClass")


let turn=0;     //0 -> turn of player 1, 
                //1 -> turn of player 2

//storing the winning patterns
const patterns = [[0,1,2], [3,4,5], [6,7,8],
                  [0,3,6], [1,4,7], [2,5,8],
                  [0,4,8], [2,4,6]]



//function to disable the boxes once winner is found
const disableBoxes = ()=>{
    for(let box of boxes)
        box.disabled = true;
}

//function to enable the boxes once reset or newgame
const enableBoxes = ()=>{
    for(let box of boxes)
        box.disabled = false;
}


boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        console.log("box was clicked");
        //set O or X based on the turn var
        if(turn)
        {
            box.innerHTML = "O"
            turn = !turn;
        }
        else   
        {
            box.innerHTML = "X"
            turn = !turn;
        }
        //clicking twice should not change the button
        box.disabled = true

        checkwinner();
    })

    

    //function to print who has won
    const showWinner = (winner)=>{
        msgContainerPara.innerText = `Congrats!!!!!! ${winner} has won the game`
        //remove the hide class
        winnerClass.classList.remove("hide");

        //disable all the buttons if one player has own
        
        disableBoxes()
    }

    //function to find who is the winner after a button click
    const checkwinner = ()=>{
        for(let i=0; i<8; i++)
        {
            // console.log(patterns[i]);

            //if all the 3 boxes are of the same type
            let pos1Val = boxes[patterns[i][0]].innerText;
            let pos2Val = boxes[patterns[i][1]].innerText;
            let pos3Val = boxes[patterns[i][2]].innerText;

            if(pos1Val == "X" && pos2Val == "X" && pos3Val == "X")
            {
                // console.log("Player X has own");
                showWinner("X");
            }

            else if(pos1Val == "O" && pos2Val == "O" && pos3Val == "O")
            {
                // console.log("Player O has own");
                showWinner("O");
            }
        }
    }
})

resetBtn.addEventListener("click", ()=>{
    boxes.forEach((box)=>{
        box.innerHTML = "";
    })
    enableBoxes();  //enabling the boxes
})

newGameBtn.addEventListener("click", ()=>{
    boxes.forEach((box)=>{
        box.innerHTML = "";
    })

    winnerClass.classList.add("hide")   //again hiding the winner message div
    enableBoxes();  //enabling the boxes
})