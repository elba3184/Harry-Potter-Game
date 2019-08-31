
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const worldMap = [
  [1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1],
  [1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1],
  [1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1],
  [1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1],
  [1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1],
  [1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1],
  [1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1],
  [1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1],
  [1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1],
  [1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1],
  [1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1],
  [1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1],
  [1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1],
  [1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1],
  [1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1]
]

const cols = 17
const size = parseInt(canvas.width / cols)

const world = [];

worldMap.forEach((row, rowIndex) => {
  row.forEach((col, colIndex) => {
    world.push({
      type: col === 1 ? 'BLOCK' : 'FLOOR',
      x: colIndex * size,
      y: rowIndex * size,
      width: size,
      height: size
    })
  })
});

const floors = world.filter(elm => elm.type === 'FLOOOR');
const blocks = world.filter(elm => elm.type === 'BLOCK');







const player = {
  x: size,
  y: 0,
  width: size,
  height: size,

  drawImage: function(){
    
  },


  fill: 'red',
  moveUp: function() {
    const self = this
    let hit = false
   
    blocks.forEach(elm => {
      if (self.y - size === elm.y && self.x === elm.x) {
        hit = true
      }
    })
    
    if (!hit) this.y -= size
  },
  moveDown: function() {
    const self = this
    let hit = false
   
    blocks.forEach(elm => {
      if (self.y + size === elm.y && self.x === elm.x) {
        hit = true
      }
    })
    
    if (!hit) this.y += size
    
    if (self.y >= cols * size) {
      alert('Você Saiu!!!!')    
    }
  },
  moveLeft: function() {
    const self = this
    let hit = false
   
    blocks.forEach(elm => {
      if (self.x - size === elm.x && self.y === elm.y) {
        hit = true
      }
    })
    
    if (!hit) this.x -= size
  },
  moveRight: function() {
    const self = this
    let hit = false
   
    blocks.forEach(elm => {
      if (self.x + size === elm.x && self.y === elm.y) {
        hit = true
      }
    })
    
    if (!hit) this.x += size
  }
}





var img = new Image();
img.onload = function() { 
 ctx.drawImage(img, player.x, player.y, 50, 50); 
}
img.src = "./img/ronFlying.png";













const updateCanvas = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  
  blocks.forEach(elm => {
    ctx.fillStyle = 'green'
    ctx.fillRect(elm.x, elm.y, elm.width, elm.height)
  })
  
  floors.forEach(elm => {
    ctx.rect(elm.x, elm.y, elm.width, elm.height)
  });
  
  ctx.save()
  ctx.fillStyle = player.fill
  ctx.fillRect(player.x, player.y, player.width, player.height)
  ctx.restore()
}

updateCanvas()

window.onkeydown = function(e) {
  const key = e.keyCode

  switch(key) {
    case 38: player.moveUp(); break
    case 40: player.moveDown(); break
    case 37: player.moveLeft(); break
    case 39: player.moveRight(); break
  }
  
  updateCanvas()
}


// ctx.fillStyle = 'blue';
// ctx.fillRect(5,5, 5, 5);
