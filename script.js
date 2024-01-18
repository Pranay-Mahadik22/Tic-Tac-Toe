var flag = true;
var state = [1, 0, 1, 0, 1, 0, 0, 1, 0];
var winner = document.getElementById('winner');

document.getElementsByClassName("container")[0];
addEventListener("click", (e) => {
  //console.log(e.target.id)
  var curDiv = e.target.id;
  setValue(curDiv);
  console.log(state);
})

function setValue(curDiv)
{
  if (flag) {
    if (state[curDiv] == 1 || state[curDiv] == 0) {
      document.getElementById(curDiv).innerText = "X";
      state[curDiv] = "X";
      checkWinner(flag);
      flag = !flag;
     
    }
  } 
  else {
    if (state[curDiv] == 1 || state[curDiv] == 0) {
      document.getElementById(curDiv).innerText = "O";
      state[curDiv] = "O";
      checkWinner(flag);
      flag = !flag;
    }
  }
}
function checkWinner(flag)
{
    if(state [0]== state[1] && state[0]== state[2] )
    {
        //alert("Row 1 is Winner")
        flag? winner.innerHTML="Winner-X": winner.innerHTML=" Winner-O"
        setDisabled();

    }
    else if(state [3]== state[4] && state[3]== state[5] )
    {
        //alert("Row 2 is Winner")
        flag? winner.innerHTML="Winner-X": winner.innerHTML=" Winner-O"
        setDisabled();
    }
    else if(state [6]== state[7] && state[6]== state[8] )
    {
        //alert("Row 3 is Winner")
        flag? winner.innerHTML="Winner-X": winner.innerHTML=" Winner-O"
        setDisabled();
    }
    else if(state [0]== state[3] &&state[0]== state[6] )
    {
       // alert("column 1 is Winner")
        flag? winner.innerHTML="Winner-X": winner.innerHTML=" Winner-O"
        setDisabled();
    }
    else if(state [1]== state[4] && state[1]== state[7] )
    {
        //alert("column 2 is Winner")
        flag? winner.innerHTML="Winner-X": winner.innerHTML=" Winner-O"
        setDisabled();
    }
    else if(state [2]== state[5] && state[2] ==state[8])
    {
        //alert("column 3 is Winner")
        flag? winner.innerHTML="Winner-X": winner.innerHTML=" Winner-O"
        setDisabled();
    }
    else if(state [0]== state[4] && state[0] ==state[8])
    {
       // alert("Diagonal 1 is Winner")
       flag? winner.innerHTML="Winner-X": winner.innerHTML=" Winner-O"
       setDisabled();
    }
    else if(state [2]== state[4] && state[2] ==state[6])
    {
       // alert("Diagonal 2 is Winner")
       flag? winner.innerHTML="Winner-X": winner.innerHTML=" Winner-O"
       setDisabled();
    }
    else 
    {
        var i;
        var count=0;
        for (let i = 0; i < state.length; i++)
        {
            if (state [i]== 1 || state[i]== 0)
            count++;
        }
        if (count == 0)
    {
        alert("It's Draw!")
    }
}

}
function setDisabled()
{
  var i;
        var count=0;
        for (let i = 0; i < state.length; i++)
        {
            if (state [i]== 1 || state[i]== 0)
            state [i]= null;
        }
}
function restartGame()
{
  location.reload();
}
function resetGame()
{
  for (let i = 0; i < 9 ; i++){
    document.getElementById(i).innerHTML="";
  }
  state = [1, 0, 1, 0, 1, 0, 0, 1, 0];
  document.getElementById('winner').innerHTML="";
  
}
function start()
{
  document.getElementById('main').style.display="none";
  document.getElementById('gameContainer').style.display="block";
}