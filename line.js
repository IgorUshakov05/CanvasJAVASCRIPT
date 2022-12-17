const canvas = document.getElementById('c1')
const ctx = canvas.getContext('2d')
let scoreHTML = document.getElementById('score')
let score = 1;


function Score() {
  score+=1
  scoreHTML.innerText = `Score: ${score} / 400`;
}

ctx.fillStyle = '#6bff93'

function win() {
  alert("You win!")
}

let xANDy = []
for (let index = 0; index < 400; index += 20) {
  xANDy.push(index)
}
console.log(xANDy)
var line = {
  size: [],
  x: xANDy[Math.floor(Math.random()*20)],
  y: xANDy[Math.floor(Math.random() * 20)]
}

function Restart() {
  line.size.length = 0
  ctx.fillStyle = '#6bff93'
  ctx.clearRect(0, 0, 400, 400)
  score = 0
  line.x = xANDy[Math.floor(Math.random() * 20)]
  line.y = xANDy[Math.floor(Math.random() * 20)]
}
line.size.push({ x: line.x, y: line.y })
function proverka() {
  for (let i = 0; i < line.size.length; i++) {
    if ((line.size[i].y == line.y) && (line.size[i].x == line.x) || (line.y < 0 || line.y > 380) || (line.x < 0 || line.x > 380)) {

      ctx.clearRect(0,0,400,400)
      Restart()
    }
  }
}


ctx.fillRect(line.x,line.y,20,20)
function moveAD(key) {
  if (score == 400) {
    win()
  }
  line.x = key == "KeyD" ? line.x += 20 : line.x -=20
  proverka()
  line.size.push({x: line.x, y: line.y})
  Score()
  ctx.fillRect(line.x, line.y, 20,20)
console.log(line.x);

}

function moveWS(key) {
  line.y = key == "KeyW" ? line.y -= 20 : line.y += 20
  proverka()

  line.size.push({ x: line.x, y: line.y })
  Score()
  ctx.fillRect(line.x, line.y, 20, 20)
  console.log(line.y);
}

function two() {
  moveWS("KeyS")
}
function three() {
  moveAD("KeyA")
}
function four() {
  moveAD("KeyD")
}
function one() {
  moveWS("KeyW")
}
document.addEventListener('keydown' , (event) => {
  if (event.code == 'KeyD') {
    moveAD(event.code)
  }
  else if (event.code == 'KeyA') {
    moveAD(event.code)
  }
  else if (event.code == 'KeyW') {
    moveWS(event.code)
  }
  else if (event.code == 'KeyS') {
    moveWS(event.code)
  }
})