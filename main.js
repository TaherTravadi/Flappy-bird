const canvas=document.getElementById('canvas1')
const ctx=canvas.getContext('2d')
canvas.width=600
canvas.height=400
let spacepressed=false
let angle=0
let frame=0
let hue=0
let score=0
let gamespeed=2
const gradient=ctx.createLinearGradient(0,0,0,70)
gradient.addColorStop('0.4','#fff')
gradient.addColorStop('0.5','#000')
gradient.addColorStop('0.55','#4040ff')
gradient.addColorStop('0.6','#000')
gradient.addColorStop('0.9','#fff')
const background= new Image()
background.src='BG.png'
const BG={

    x1:0,
    x2:canvas.width,
    y:0,
    width:canvas.width,
    height:canvas.height

}
function handlebackground(){
    if(BG.x1<=-BG.width+gamespeed)BG.x1=BG.width
    else BG.x1-=gamespeed
    if(BG.x2<=-BG.width+gamespeed)BG.x2=BG.width
    else BG.x2-=gamespeed
    ctx.drawImage(background,BG.x1,BG.y,BG.width,BG.height)
    ctx.drawImage(background,BG.x2,BG.y,BG.width,BG.height)

}

function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    handlebackground()
    handleobstacles()
    bird.update()
    bird.draw()
    ctx.fillStyle=gradient
    ctx.font='90px Georgia'
    ctx.strokeText(score,450,70)
    ctx.fillText(score,450,70)
    handlecollisions()
    if(handlecollisions())return
    handleparticles()
   
    //ctx.fillRect(10,canvas.height-90,50,50)
    requestAnimationFrame(animate)
    angle+=0.12
    hue++
    frame++
}
animate()
window.addEventListener('keydown',function(e){
    if(e.code==='Space') spacepressed=true
    

    console.log(e.code)
})
window.addEventListener('keyup',function(e){
    if(e.code==='Space') spacepressed=false
    bird.framex=0
})
const bang= new Image()
bang.src='bang.png'
function handlecollisions(){
    for(let i=0;i<obstaclearray.length;i++){
        if(bird.x<obstaclearray[i].x+obstaclearray[i].width &&
            bird.x+bird.width>obstaclearray[i].x&&
            ((bird.y<0+obstaclearray[i].top && bird.y+bird.height>0)||
            (bird.y>canvas.height-obstaclearray[i].bottoms &&
                bird.y+bird.height<canvas.height))){

                    ctx.drawImage(bang,bird.x,bird.y,50,50)
                    ctx.font="25px Georgia"
                    ctx.fillStyle='white'
                    ctx.fillText('Game over,your score is  '+score,160,canvas.height/2-10)
                    return true

                }
        
    }
}
