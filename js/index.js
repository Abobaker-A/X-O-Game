let turn = "x";
let title = document.querySelector(".title");
let squares = Array.from(document.querySelectorAll(".square")) ;
squares.forEach((square) => {
  square.addEventListener("click", function () {
    game(square.id);
   
  });
});
function game(id) {
  let square = document.getElementById(id)
  if (turn=='x'&&square.innerHTML==""){
    square.innerHTML='X';
    turn='o'
    title.innerHTML='O';
  }
  else if(turn=='o'&&square.innerHTML==""){
    square.innerHTML='O';
    turn='x'
    title.innerHTML='X';
  }
  winner()
}
function winner(){
  let squr=[];
  let i =0
  for (const square of squares) {
   squr[i] = square.innerHTML;
    i++
  }
  if( squr[0]==squr[1] && squr[1]==squr[2] && squr[0] != "" ){
    end(0,1,2)
  }
  else if( squr[3]==squr[4] && squr[4]==squr[5] && squr[5] != "" ){
    end(3,4,5)
  }
  else if( squr[6]==squr[7] && squr[7]==squr[8] && squr[7] != "" ){
    end(6,7,8)
  }

  else if( squr[0]==squr[3] && squr[3]==squr[6] && squr[6] != "" ){
    end(0,3,6)
  }
  else if( squr[1]==squr[4] && squr[4]==squr[7] && squr[7] != "" ){
    end(1,4,7)
  }
  else if( squr[2]==squr[5] && squr[5]==squr[8] && squr[8] != "" ){
    end(2,5,8)
  }

  else if( squr[0]==squr[4] && squr[4]==squr[8] && squr[8] != "" ){
    end(0,4,8)
  }
  else if( squr[2]==squr[4] && squr[4]==squr[6] && squr[6] != "" ){
    end(2,4,6)
  }

}
function end(n1,n2,n3){
  title.innerHTML=`${squares[n1].innerHTML} Winner`
  squares[n1].style.background='#000';
  squares[n2].style.background='#000';
  squares[n3].style.background='#000';
  setInterval(function(){
    title.innerHTML += '.'
  },1000)
  setTimeout(function(){
    location.reload()
  },4000)

}