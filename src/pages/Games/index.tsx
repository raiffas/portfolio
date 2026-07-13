import { useRef, useEffect, useState } from 'react'
import catImgSrc from '../../assets/images/cat.svg'
import lizardImgSrc from '../../assets/images/lizard.svg'

interface ImageProperties {
  xPos: number
  yPos: number
  width: number
  height: number
}


function getRandomArbitrary(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function wrapPosition(value: number, min: number, max: number | undefined): number {
  if (max && value >= min && value <= max) {
    return value;
  } else if (max && value < min) {
    return max;
  } else if (max && value > max) {
    return min;
  }
  return 0;
}

// TODO / PAIR : where should i even put this lmao

// TODO/PAIR : why does the distance function not work the way i expect it to 
// square root [(xa - ya)^2 + (xb - yb)^2]
function calculateEuclideanDistance(obj1: ImageProperties, obj2: ImageProperties) : number {
  console.log('player coords: ', obj1)
  console.log('enemy coords: ', obj2)
  return Math.sqrt( ((obj1.xPos - obj1.yPos)**2) + ((obj2.xPos - obj2.yPos)**2) )
}

// abs( x1 - y1) + abs (x2 - y2)
function calculateManhattanDistance(obj1: ImageProperties, obj2: ImageProperties) : number {
  console.log('player coords: ', obj1)
  console.log('enemy coords: ', obj2)
  return Math.abs(obj1.xPos - obj1.yPos) + Math.abs(obj2.xPos - obj2.yPos)
}

function getCenterDistance(obj1: ImageProperties, obj2: ImageProperties) : number {
  const center1x = obj1.xPos + obj1.width / 2
  const center1y = obj1.yPos + obj1.height / 2
  const center2x = obj2.xPos + obj2.width / 2
  const center2y = obj2.yPos + obj2.height / 2


  return Math.hypot(center2x - center1x, center2y - center1y)
}

// TODO collision detection
// if player object is within a range of enemy object, return detection ? 
function collisionDetection(obj1: ImageProperties, obj2: ImageProperties) : boolean {
  // for each enemy
  // calculate distance between player and enemy
 // console.log( 'distance between player and enemy: ', getCenterDistance(obj1, obj2) )

  if (getCenterDistance(obj1, obj2) <= 40) {
    console.log('eat me!')
    return true
  }
  return false

  // lizard is drawn at xPos, yPos and is width and height so the center is at width - xPos / 2 and height - yPos / 2
 
}

// should this be here?
const playerImg = new Image()
playerImg.src = catImgSrc
const enemyImg = new Image()
enemyImg.src = lizardImgSrc
//const pawImg = new Image()
//pawImg.src = '/src/assets/paw.svg'
const enemySpeed = 1 // TODO: add direction var instead of doing direction here 
let enemyDestroyed = false
let playerSpeed = 0

export function Game() {
  // set up refs
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const playerPropertiesRef = useRef<ImageProperties>({ xPos: 300, yPos: 300, width: 50, height: 50 })
  const enemyPropertiesRef = useRef<ImageProperties>({ xPos: 0, yPos: 0, width: 50, height: 50 })
  const pawPropertiesRef = useRef<ImageProperties>({ xPos: 0, yPos: 0, width: 25, height: 25 })
  const rafIdRef = useRef<number>(0)

  //guaranteed to run at least once when the component mounts
  useEffect(() => {
    // the code we want to run ------------------------------------
    // check if canvas has been mounted
    // returns if not mounted --> handles null case
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let lastrafID= 0;
    let deltaTime  = 0;

    const onKeyDown = (event: KeyboardEvent) => {
      const p = playerPropertiesRef.current
      const s = pawPropertiesRef.current
      const c = canvasRef.current
      if (event.key === 'ArrowLeft') p.xPos -= 10
      if (event.key === 'ArrowRight') p.xPos += 10
      if (event.key === 'ArrowUp') p.yPos -= 10
      if (event.key === 'ArrowDown') p.yPos += 10
      p.xPos = wrapPosition(p.xPos, 0, canvasRef.current?.width)
      if (event.key === ' '){
        console.log('shoot')
        // when space is clicked, player moves to hit the lizard
        playerSpeed = 5

      }
    }

    window.addEventListener('keydown', onKeyDown)

    const update = () => {
      //nsole.log(rafIdRef.current)
      const p = playerPropertiesRef.current
      const e = enemyPropertiesRef.current
      const s = pawPropertiesRef.current

      // update enemy position based on speed
      // position += direction * speed * deltatime
      // TODO: update detlaTime based on the time between frames
      deltaTime = rafIdRef.current - lastrafID
      lastrafID = rafIdRef.current
      e.xPos += enemySpeed * deltaTime;
      e.xPos = wrapPosition(e.xPos, 0, canvasRef.current?.width)

      // update player pos based on speed
      p.yPos -= playerSpeed * deltaTime;
      // TODO: on collision with enemy playerSpeed = 0

      // collision detection
      enemyDestroyed = collisionDetection(p, e)


      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.drawImage(playerImg, p.xPos, p.yPos, p.width, p.height)
      if (enemyDestroyed === false) {
        ctx.drawImage(enemyImg, e.xPos, e.yPos, e.width, e.height)
      }
     
      rafIdRef.current = requestAnimationFrame(update) // infinite render loop
    }
    rafIdRef.current = requestAnimationFrame(update) //requestAnimationFrame calls update

    //optional return function -------------------------------------
    return () => {
      cancelAnimationFrame(rafIdRef.current)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, []) // the dependency array

  return (
    <div>
      <canvas ref={canvasRef} width={500} height={500}/>
    </div>
  )
}

